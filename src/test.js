import fetch from "isomorphic-fetch";
import { Trip } from "./Trip";

/*
    create an api that creates the sample body by taking in a number of parameters
        experiment with different paramerts to see what each one does
    read from a csv file and start executing requests
        try to store the data that you get in a text file for now
    decide upon the structure for the mongoDB database
*/

const sampleBody = {
  method: "search",
  params: {
    "2": [
      "solutionList",
    ],
    "3": {
      "4": {
        "1": 1,
        "2": 30
      },
      "5": {
        "1": 1
      },
      "7": [{ "3": ["ORD"], "5": ["ATL"], "8": "2019-10-18", "9": 0, "11": 0 }],
      "8": "COACH",
      "9": 1,
      "10": 1,
      "15": "SUNDAY",
      "16": 0,
      "22": "default",
      "25": 1
    },
    "4": "specificDates",
    "7": "",
    "8": "wholeTrip"
  }
};


function fetchPricingData() {
  fetch("https://matrix.itasoftware.com/search", {
    credentials: "include",
    headers: {
        "authority": "matrix.itasoftware.com",
        "origin": "https://matrix.itasoftware.com",
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,es-US;q=0.8,es;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/javascript; charset=UTF-8",
        pragma: "no-cache",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        "x-gwt-module-base": "https://matrix.itasoftware.com/gwt/",
        "x-gwt-permutation": "5665A250AE0BC50AE246C615DA86FA1E",
        "referer": "https://matrix.itasoftware.com/"
    },
    body: JSON.stringify(sampleBody),
    method: "POST",
  })
    .then(res => {
      return res.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse["result"][38][2]);
      parseResponse(jsonResponse);
    });
}

function parseResponse(jsonResponse) {
  const trip = new Trip(jsonResponse);
}

