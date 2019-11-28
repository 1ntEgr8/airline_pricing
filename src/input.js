const csv = require("csv-parser");
const path = require("path");
import fs from "fs";

const FILE = process.env.file || path.resolve(__dirname, "..", "data", "airline_pricing.csv");

export function read(callback) {
    const rows = []
    fs.createReadStream(FILE)
    .pipe(csv())
    .on("data", row => {
        rows.push(row);
    })
    .on("end", () => {
        callback(rows);
    });
}