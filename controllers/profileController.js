var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var profile = require("./profileModel")

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

    //The profile login page
    app.get("/profile/:id", urlencodedParser, (req, res)=>{

        mongoose.connect("mongodb+srv://User0:Password@bookit-f6qff.mongodb.net/BookIT?retryWrites=true", {useNewUrlParser:true}, (err, db)=>{
            if(err) throw err; 

            profile.findOne({_id:req.params.id}, (err, user)=>{
                if(err) throw err;
                
                if(user != null){
                    res.render("pages/profile", {profileData:user});
                }

            });

            
        });  
    });
    
    app.post("/profile/:id", urlencodedParser, (req, res)=>{

        profile.findOne({_id:req.params.id}, {}, (err, user)=>{
            if(err) throw err;

            var removed = false;
        
            var filtered = user.books.filter((val, ind, arr) => {
                if(val.ISBN == req.body.ISBN)
                {
                    removed = true;
                    return false;
                }
                else
                {
                    return true;
                }
            })

            user.books = filtered;

            if(!removed)
            {
                user.books.push(req.body);
            }

            user.save((err) =>{
                if (err) throw err;
            });

        });

        res.redirect('back');
    });

}