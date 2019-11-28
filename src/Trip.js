 import { Flight } from "./Flight";

 export class Trip {
    constructor(data, who) {
        //this.raw = data["result"];
        this.raw = data["_r"];
        this.who = who;
        // console.log("flights");
        // console.log(mapping["flights"](this.raw)[0]);
        if (!this.raw) {
            throw new Error("Invalid data passed to constructor of Trip. Couldn't find 'result' attribute.");
        }
        this._parseData();
    }


    _parseData() {
        // dispatch parsing based on provider
        switch (who) {
            case GFLIGHTS: {
                console.log("parsed");
            } break;
            case ITA: {

            } break;
            default: {
                throw new Error(`Airline ticket provider ${who} is not supported yet`);
            }
        }
    }

    _parseGFLIGHTS() {

    }

    _parseITA() {

    }

    /* ITA PARSING  */
    // get carriersCode() {
    //     return this.carriers.map(carrier => carrier.code); 
    // }

    // get carriersName() {
    //     return this.carriers.map(carrier => carrier.name);
    // }

    // _parseData() {
    //     try {
    //         this.carriers = this.raw[10][1].map(o => {
    //             return {
    //             "code": o[1][1],
    //             "name": o[1][2]
    //             }
    //         });
    //         this.flights = this.raw[38][2].map(data => new Flight(data));
    //     } catch (e) {
    //         console.log("Oops, something went wrong :(");
    //         console.log(e);
    //     }
    //     console.log(this.flights);
    //     console.log("The number of flights found are: " + this.flights.length);
    // }

    // getBestPricesRaw(numOfStops) {
    //     return this.raw[10][2]
    //         .filter(o => o[2] == numOfStops)[0][1]
    //         .map(o => {
    //             if (!o[1]) return null;
    //             return o[1];
    //         });
    // }

    // getFlightsRaw() {
    //     return this.raw[38][2];
    // }
}
