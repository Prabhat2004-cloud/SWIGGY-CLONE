require("dotenv").config();
const connectDB = require("../config/database");
const Restaurant = require("../models/RestaurantTemp");
const RestrauData = require("../../frontend/src/utils/restdata_short");

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log(" Database Connected");

    console.log(RestrauData.length);

    await Restaurant.deleteMany();

    await Restaurant.insertMany(RestrauData);

    console.log("Restaurants Seeded Successfully");
  } catch (error) {
    console.log(error);
  }
};

seedDatabase();