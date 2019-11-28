// TODO: fix this

const mapping = {
    "flights": raw => raw[38][2],
    "price": raw => raw[1][1],
    "carrier_code": raw => raw[2][1][1][1],
    "carrier_name": raw => raw[2][1][1][2],
    "from_code": raw => raw[2][2][0][1][1],
    "from_name": raw => raw[2][2][0][1][2],
    "to_code": raw => raw[2][2][0][2][1],
    "to_name": raw => raw[2][2][0][2][2],
    "departure_date": raw => raw[2][2][0][3],
    "arrival_date": raw => raw[2][2][0][4],
    "flight_numbers": raw => raw[2][2][0][7],
    "stops": raw => raw[2][2][0][8],
}

export function parseTrip(trip, flightParser) {
    try {
        trip.carriers = trip.raw[10][1].map(o => {
            return {
            "code": o[1][1],
            "name": o[1][2]
            }
        });
        trip.flights = trip.raw[38][2].map(data => new Flight(data, flightParser));
    } catch (e) {
        console.log("Oops, something went wrong :(");
        console.log(e);
    }
    console.log(trip.flights);
    console.log("The number of flights found are: " + trip.flights.length);
}

export function parseFlight(flight) {
    console.log("This is a flight");
}