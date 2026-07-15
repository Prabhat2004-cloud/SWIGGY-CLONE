const Restaurant = require("../models/RestaurantTemp");

const getRestaurants = async (req, res) => {

    const restaurants = await Restaurant.find();

    res.send(restaurants);


};

module.exports={getRestaurants}