const express=require("express");
const router=express.Router();
const getRestMenu=require("../controllers/menuController")

router.get('/:id',getRestMenu);

module.exports=router;