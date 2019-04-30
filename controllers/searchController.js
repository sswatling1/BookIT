var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var profile = require("./profileModel")

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

    app.get("/search", (req, res)=>{
        res.render("./pages/search", {profileData: []});
    });

    app.post("/search", urlencodedParser, (req, res)=>{

        var hasBook = [];

        mongoose.connect("mongodb+srv://User0:Password@bookit-f6qff.mongodb.net/BookIT?retryWrites=true", {useNewUrlParser:true}, (err, db)=>{
            if(err) throw err; 

            profile.find((err, user)=>{
                if(err) throw err;
                
                user.forEach((elem)=>{
                    elem.books.forEach((book)=>{

                        if(book.ISBN === req.body.ISBN)
                        {
                            hasBook.push(elem);
                        }
                    })
                })

                res.render("pages/search", {profileData:hasBook});

            });
        });        
    });
};