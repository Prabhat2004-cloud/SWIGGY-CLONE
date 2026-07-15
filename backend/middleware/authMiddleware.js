const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.send({
            message: "Token not found"
        });
    }
    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");;

        if(!user) {
        return res.send({
            message: "User not found"
        });
        }
        req.user = user;

        next();

    } catch (error) {

        return res.send({
            message: "Invalid Token"
        });

    }

};

module.exports = authMiddleware;