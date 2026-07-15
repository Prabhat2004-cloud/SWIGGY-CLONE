const mongoose=require("mongoose");

const menuSchema= new mongoose.Schema({
    restaurantId: String,

    restaurantInfo: Object,

    menuCategories: Array
});

module.exports = mongoose.model("Menu", menuSchema);