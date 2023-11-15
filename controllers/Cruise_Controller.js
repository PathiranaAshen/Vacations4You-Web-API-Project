const asyncHandler = require("express-async-handler");
const Cruise = require("../models/Cruise");

//Get Cruise by Search
const getCruiseByDeparture = asyncHandler(async (req, res) => {
  const cruise = await Cruise.find({ departureDestination: req.params.key });

  if (cruise) {
    res.status(200).json({
      success: true,
      data: cruise,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Cruise not found",
    });
  }
});

//Get Cruise by Search
const getCruiseByArrival = asyncHandler(async (req, res) => {
  const cruise = await Cruise.find({ arrivalDestination: req.params.key });

  if (cruise) {
    res.status(200).json({
      success: true,
      data: cruise,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Cruise not found",
    });
  }
});

//Get Cruise by Search
const getCruiseByDDay = asyncHandler(async (req, res) => {
  const cruise = await Cruise.find({ departureDate: req.params.key });

  if (cruise) {
    res.status(200).json({
      success: true,
      data: cruise,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Cruise not found",
    });
  }
});

//Get Cruise by Search
const getCruiseByADay = asyncHandler(async (req, res) => {
  const cruise = await Cruise.find({ arrivalDate: req.params.key });

  if (cruise) {
    res.status(200).json({
      success: true,
      data: cruise,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Cruise not found",
    });
  }
});

//Get Cruise by Search
const getCruiseByCabin = asyncHandler(async (req, res) => {
  const cruise = await Cruise.find({ cabin: req.params.key });

  if (cruise) {
    res.status(200).json({
      success: true,
      data: cruise,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Cruise not found",
    });
  }
});

//Retrieve all the Cruise
const getCruise = asyncHandler(async (req, res) => {
  const cruise = await Cruise.find();

  if (cruise) {
    res.status(200).json({
      success: true,
      data: cruise,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No Cruise found",
    });
    throw new Error("No Cruise found");
  }
});

module.exports = {
  getCruiseByDeparture,
  getCruiseByArrival,
  getCruiseByDDay,
  getCruiseByADay,
  getCruiseByCabin,
  getCruise,
};
