const Menu = require("../models/Menu");

const getRestMenu = async (req, res) => {

    const { id } = req.params;

    const menu = await Menu.findOne({
        "restaurantInfo.id": id
    });

    res.send(menu);

};

module.exports = getRestMenu;