const Restaurant = require("../models/Restaurant");

const getRestaurants = async (req, res) => {

    const restaurants = await Restaurant.find();

    res.send(restaurants);


};

module.exports={getRestaurants}