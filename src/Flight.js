export class Flight {
    constructor(data) {
        this.raw = data;
        if (!this.raw) {
            throw new Error("Invalid data passed to constructor of Flight.");
        }
        this._parseData();
    }

    _parseData() {
        // TODO: advisories

        this.price = this.raw[1][1];
        this.carrier = {
            "code": this.raw[2][1][1][1],
            "name": this.raw[2][1][1][2],
        }
        this.from = {
            "code": this.raw[2][2][0][1][1],
            "name": this.raw[2][2][0][1][2],
        };
        this.to = {
            "code": this.raw[2][2][0][2][1],
            "name": this.raw[2][2][0][2][2],
        };
        this.departureDate = this._getDateAndTime(this.raw[2][2][0][3]);
        this.arrivalDate = this._getDateAndTime(this.raw[2][2][0][4]);
        this.flightNumbers = this.raw[2][2][0][7];
        this.stops = this._getStops(this.raw[2][2][0][8]);
        // this.advisories = this.raw[2][2][0][12][2][1];
        this.code = this.raw[5];
        // console.log(this.raw[2][3]); MIGHT BE IMPORTANT TAKE A LOOK LATER
    }

    _getDateAndTime(timeStr) {
        // TODO: have to process the time part
        let tIndex = timeStr.indexOf('T');
        return {
            "date": timeStr.slice(0, tIndex),
            "time": timeStr.slice(tIndex + 1)
        };
    }

    _getStops(data) {
        if (!data) {
            return null;
        }
        return data.map(el =>  {
            return {
                "code": el[1],
                "name": el[2]
            }
        });
    }
}