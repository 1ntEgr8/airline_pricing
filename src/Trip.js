import { Providers } from "./providers";
import * as GFLIGHTS from "./parsers/gflights";
import * as ITA from "./parsers/ita";

export class Trip {
  constructor(data, who) {
    this.who = who;
    this._parse(data);
  }

  _parse(data) {
    // dispatch parsing based on provider
    switch (this.who) {
      case Providers.GFLIGHTS:
        {
          this.raw = data["_r"];
          GFLIGHTS.parseTrip(this, GFLIGHTS.parseFlight);
        }
        break;
      case Providers.ITA:
        {
          this.raw = data["result"];
          ITA.parseTrip(this, ITA.parseFlight);
        }
        break;
      default: {
        throw new Error(`Airline ticket provider ${who} is not supported yet`);
      }
    }

    if (!this.raw) {
      throw new Error(
        "Invalid data passed to constructor of Trip. Couldn't find 'result' attribute."
      );
    }
  }
}
