import { Flight } from "../Flight";

const mapping = {
  "trip": {
    "flights": raw => raw[2][2][0].concat(raw[2][2][1]? raw[2][2][1] : []),
    "carriers": raw => raw[4][0],
    "airliners": raw => raw[10][0]
  },
  "flight": {
    "id": raw => raw[0][2],
    "price": raw => raw[0][6],
    "paths": raw => raw[0][4],
  }
};

export function parseTrip(trip, flightParser) {
  if (!trip.raw) {
    throw new Error(
      "Invalid data passed to constructor of Trip."
    );
  }
  console.log("got the data");
  const reducer = (acc, curr) => {
    acc.push({
      code: curr[0],
      name: curr[1]
    });
    return acc; 
  }

  trip.carriers = mapping["trip"]["carriers"](trip.raw)
    .reduce(reducer, []);
  trip.airliners = mapping["trip"]["airliners"](trip.raw)
  .reduce(reducer, []);
  trip.flights = mapping["trip"]["flights"](trip.raw)
    .map(flight => new Flight(flight, flightParser));
}

export function parseFlight(flight) {
  flight.id = mapping["flight"]["id"](flight.raw);
  flight.price = mapping["flight"]["price"](flight.raw);
  flight.paths = mapping["flight"]["paths"](flight.raw)
    .map(path => {
      return {
        from: path[0],
        to: path[1],
        departure: path[3][0],
        arrival: path[4][0]
      }
    });
}

/*
    Trip
        from
            code
            name
        to
            code
            name
        flights[]
          Flight objects
        carriers[]
          code
          name
        airliners[]
          code 
          name

    Flight
        price
        paths[]
            from
                code
                name
            to
                code
                name
            time
            carrier
                code
                name
*/
