const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  info: {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    cloudinaryImageId: {
      type: String,
      required: true,
    },

    locality: String,

    areaName: String,

    costForTwo: String,

    cuisines: [String],

    avgRating: Number,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);