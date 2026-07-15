const User = require("../models/User");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken");

const signup = async (req, res) => {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.send({
            message: "User already exists"
        });
    }

    const hashpass= await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashpass
    });

    res.send({
        message: "User registered successfully",
        user
    });

};

const login = async (req, res) => {

    const { email, password } = req.body;

   
    const finduser = await User.findOne({ email });

    if (!finduser) {
        return res.send({
            message: "User not found"
        });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, finduser.password);

    if (!isMatch) {
        return res.send({
            message: "Invalid password"
        });
    }

    const token = jwt.sign(
    {
        id: finduser._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d"
    }
    )

    res.send({
        message:"login sucessfully",
        token
    })

    
}
const getProfile = async (req, res) => {

    res.send(req.user);

}



module.exports = { signup,login,getProfile }