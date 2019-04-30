var registerController = require("./registerController");
var profileController = require("./profileController");
var loginController = require("./loginController")
var searchController = require("./searchController");

module.exports = (app)=>{

    loginController(app);
    profileController(app);
    registerController(app);
    searchController(app);

}