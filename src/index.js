require("babel-polyfill");
import puppeteer from "puppeteer";
import atob from "atob";
import { Trip } from "./Trip";
import { read } from "./input";
import { Providers } from "./providers";
import { gflights_mappings, GFLIGHTS } from "./mappings";

// const URL = "https://matrix.itasoftware.com";
// const URLPATTERN = "https://matrix.itasoftware.com/search";

let counter = 0; // keeping track of number of requests made

const URL = "https://www.google.com/flights";
const URLPATTERN = "https://www.google.com/async/flights/search*";
const DEVMODE = false;
const SLOMO = 75;
const BATCHSIZE = 5;
const mappings = gflights_mappings;

function init() {
  read(processQueries); 
}

async function processQueries(queries) {
  let promises = [];
  let reqCounter = 0;
  for (let query of queries) {
    reqCounter++;
    if (reqCounter > BATCHSIZE) {
      await Promise.all(promises);
      promises = [];
      reqCounter = 0;
    } else {
      promises.push(searchFlight(query));
    }
  }
  await Promise.all(promises);
}

async function searchFlight(query) {
  const browser = await createBrowser();
  const page = await createPage(browser);

  await page.goto(URL, {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForSelector("div[role='search']").then(async () => {
    await interceptRequestsForPage(page);
    await fillForm(page, query);

    // TODO: move closing logic to another function
    console.info("Closed instance");
    await browser.close();
  });
}

async function fillForm(page, query, who = "gflights") {
  switch (who) {
    case "gflights": {
      for (let key in query) {
        if (key == "type") {
          // fill in code here
        } else {
          if (query[key]) {
            if (key != "return_date") {
              await page.click(mappings[`${key}_div`]);
            }
            await type(query[key], page, mappings[key])
              .then(async () => {
                await page.click(mappings[key]);
                await page.keyboard.press('Enter');
                if (key == "return_date") {
                  await page.click("g-raised-button[data-flt-ve='done']");
                }
              });
          }
        }
      }
    } break;
    default: console.error("Couldn't recognize flight price aggregator")
  }
}

async function type(text, page, selector) {
  await page.$(selector).then(async elementHandle => {
    if (elementHandle) {
      await elementHandle.type(text);
    }
  });
}

async function interceptRequestsForPage(page) {
  const client = await page.target().createCDPSession();

  await client.send("Network.enable");

  await client.send("Network.setRequestInterception", {
    patterns: [
      {
        urlPattern: URLPATTERN,
        interceptionStage: "HeadersReceived",
        resourceType: "XHR"
      }
    ]
  });

  client.on("Network.requestIntercepted", async res => {
    const response = await client.send(
      "Network.getResponseBodyForInterception",
      {
        interceptionId: res.interceptionId
      }
    );

    // await client.send("Network.continueInterceptedRequest", {
    //   interceptionId: res.interceptionId
    // });

    const formattedResString = atob(response.body).substring(4);
    const trip = new Trip(JSON.parse(formattedResString), Providers.GFLIGHTS);
    await page.close();
  });
}

init();

// helpers

async function createBrowser() {
  return await puppeteer.launch({
    headless: !DEVMODE,
    defaultViewport: null,
    args: ["--window-size=1920,1170", "--window-position=0,0"],
    slowMo: SLOMO 
  });
}

async function createPage(browser) {
  const page = await broswer.newPage();
  console.info(`Opened page #${counter++}`);
  return page;
}
