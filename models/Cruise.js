const mongoose = require("mongoose");

const CruiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  departureDestination: {
    type: String,
    required: true,
  },

  arrivalDestination: {
    type: String,
    required: true,
  },

  departureDate: {
    type: String,
    required: true,
  },

  arrivalDate: {
    type: String,
    required: true,
  },

  deck: {
    type: Number,
    required: true,
  },

  cabin: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  provider: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Cruise = mongoose.model("Cruise", CruiseSchema);

module.exports = Cruise;
