require("dotenv").config();
const RestaurantMenusData =require("../../frontend/src/utils/RestaurantMenudata");
const Menu =require("../models/menu");
const connectDB =require("../config/database");

const seedMenu = async () => {
    try {

        await connectDB();

        await Menu.deleteMany();

        await Menu.insertMany(Object.values(RestaurantMenusData));

        console.log("Menu Data Inserted Successfully");

    } catch (error) {
        console.log(error);


    }
};

seedMenu();