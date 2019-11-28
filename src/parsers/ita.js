// TODO: fix this

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