const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    settled: { type: Number, required: false },
    picture: { type: String, required: true },
    places: { type: Array, required: false },
    description: { type: String, required: false },
    country: { type: String, required: true },
    visited: { type: Boolean, required: true },
}, {
    bufferCommands: false,
    capped: { size: 1000000, max: 100 },
});

module.exports = mongoose.model("cities", CitySchema);