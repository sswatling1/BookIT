var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var profile = require("./profileModel")


var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

    app.get("/register", (req, res)=>{
        res.render("./pages/register");
    });

    app.post("/register", urlencodedParser, (req, res)=>{

        //Connect to the database
        mongoose.connect("mongodb+srv://User0:Password@bookit-f6qff.mongodb.net/BookIT?retryWrites=true", {useNewUrlParser:true}, (err)=>{
            if(err){
                console.log("error - " + err);
            }
        });

        //Get data from the view and post it to mongoDB
        profile(req.body).save((err, data)=>{
            if(err) throw err;
            mongoose.disconnect();
        });


        res.redirect('./');
    });
}