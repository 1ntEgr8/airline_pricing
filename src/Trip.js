import { Flight } from "./Flight";
import { Providers } from "./providers";
import * as GFLIGHTS from "./parsers/gflights";
import * as ITA from "./parsers/ita";

export class Trip {
  constructor(data, who) {
    //this.raw = data["result"];
    this.raw = data["_r"];
    this.who = who;
    // console.log("flights");
    // console.log(mapping["flights"](this.raw)[0]);
    if (!this.raw) {
      throw new Error(
        "Invalid data passed to constructor of Trip. Couldn't find 'result' attribute."
      );
    }
    this._parse();
  }

  _parse() {
    // dispatch parsing based on provider
    switch (this.who) {
      case Providers.GFLIGHTS:
        {
          GFLIGHTS.parseTrip(this, GFLIGHTS.parseFlight);
        }
        break;
      case Providers.ITA:
        {
          ITA.parseTrip(this, ITA.parseFlight);
        }
        break;
      default: {
        throw new Error(`Airline ticket provider ${who} is not supported yet`);
      }
    }
  }
}
