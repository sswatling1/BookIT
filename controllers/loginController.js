var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

    //The profile login page
    app.get("/", (req, res)=>{
        res.render("pages/index");
        
    });

    app.post("/", urlencodedParser, (req, res)=>{
        //Connect to the database
         mongoose.connect("mongodb+srv://User0:Password@bookit-f6qff.mongodb.net/BookIT?retryWrites=true", {useNewUrlParser:true}, (err, db)=>{
            if(err) throw err; 

            db.collection('profiles').findOne(
                {$and:
                    [
                        {email:{$eq:req.body.email}}, 
                        {password:{$eq:req.body.password}}
                    ]
                }, 
                (err, user)=>{
                
                    if(err) throw err;

                    if(user != null)
                    {
                        res.redirect("/profile/" + user._id);
                    }
                    else
                    {
                        console.log("user is null");
                    }
                }
            );
        }); 

        
    });
};
