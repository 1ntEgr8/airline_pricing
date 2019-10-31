 import { Flight } from "./Flight";

 export class Trip {
    constructor(data) {
        console.log(data);
        this.raw = data["result"];
        if (!this.raw) {
            throw new Error("Invalid data passed to constructor of Trip. Couldn't find 'result' attribute.");
            return;
        }
        this._parseData();
    }

    get carriersCode() {
        return this.carriers.map(carrier => carrier.code);d 
    }

    get carriersName() {
        return this.carriers.map(carrier => carrier.name);
    }

    _parseData() {
        try {
            this.carriers = this.raw[10][1].map(o => {
                return {
                "code": o[1][1],
                "name": o[1][2]
                }
            });
            console.log(this.raw[38][2]);
            this.flights = this.raw[38][2].map(data => new Flight(data));
        } catch (e) {
            console.log("Oops, something went wrong :(");
            console.log(e);
        }
        console.log(this.flights);
        console.log("The number of flights found are: " + this.flights.length);
    }

    getBestPricesRaw(numOfStops) {
        return this.raw[10][2]
            .filter(o => o[2] == numOfStops)[0][1]
            .map(o => {
                if (!o[1]) return null;
                return o[1];
            });
    }

    getFlightsRaw() {
        return this.raw[38][2];
    }
}
