const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const app = express();
const restaurantRoutes = require("./routes/restaurantRoutes");
const userRoutes = require("./routes/userRouter");
const menueRoutes=require("./routes/menuRouter");

app.use(cors());
app.use(express.json());

connectDB();


app.use("/api/restaurants", restaurantRoutes);
app.use("/api/users",userRoutes);
app.use("/api/restaurants/menu",menueRoutes);


const port=process.env.PORT|| 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});