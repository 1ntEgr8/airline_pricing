export class Flight {
    constructor(data, parser) {
        this.raw = data;
        if (!this.raw) {
            throw new Error("Invalid data passed to constructor of Flight.");
        }
        parser(this);
    }

    _parse() {
        // dispatch parsing based on provider
        switch (this.who) {
            case Providers.GFLIGHTS: {
                GFLIGHTS.parseFlight(this);
            } break;
            case Providers.ITA: {
                ITA.parseFlight(this);
            } break;
            default: {
                throw new Error(`Airline ticket provider ${who} is not supported yet`);
            }
        }
    }

    _parse() {
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