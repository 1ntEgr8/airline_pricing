require('babel-polyfill');
import puppeteer from 'puppeteer';
import atob from "atob";
import { Trip } from "./Trip";

const URL = "https://matrix.itasoftware.com";
(async () => {
    const browser = await puppeteer.launch({
        headless:false, 
        defaultViewport:null,
        args: ['--window-size=1920,1170','--window-position=0,0']
    });
    const page = (await browser.pages())[0];
    await page.goto(URL)
        .then(() => {
            searchFlight(page, testQuery); 
        });
    await interceptRequestsForPage(page);
})();

const querySchema = {
    "departing-from": "#cityPair-orig-0",
    "destination": "#cityPair-dest-0",
    "outbound-date": "#cityPair-outDate-0",
    "return-date": "#cityPair-retDate-0",
};

const testQuery = {
    "departing-from": "ATL",
    "destination": "JFK",
    "outbound-date": "11/28/2019",
    "return-date": "12/01/2019"
};

async function searchFlight(page, query) {
    switch(query["type"]) {
        case "one-way trip": break;
        case "multi-city trip": break;
    }

    for (let key in query) {
        await type(query[key], page, querySchema[key]);
    }
    await page.click("#searchButton-0");
    await interceptRequestsForPage(page);
}

async function type(text, page, id) {
    await page.$(id)
        .then(async elementHandle => {
            // await elementHandle.evaluate((node, text) => {
            //     node.value = text; 
            // }, text);
            await elementHandle.type(text);
        })
}

async function interceptRequestsForPage(page) {
    const client = await page.target().createCDPSession();

    await client.send("Network.enable");

    await client.send("Network.setRequestInterception", {
        patterns: [{
            urlPattern: "https://matrix.itasoftware.com/search",
            interceptionStage: "HeadersReceived"
        }]
    });

    client.on("Network.requestIntercepted", async (res) => {
        const response = await client.send("Network.getResponseBodyForInterception", {
            "interceptionId": res.interceptionId
        });
        client.send("Network.continueInterceptedRequest", {
            "interceptionId": res.interceptionId
        });

        const trip = new Trip(JSON.parse(atob(response.body)));
    });
}
