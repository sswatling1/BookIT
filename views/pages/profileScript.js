var mongoose = require('mongoose');
var profile = require('../../controllers/profileModel');

function RemoveBook(id){
    var book = document.getElementById("book_" + id);
    console.log(id);
    console.log(book);

    profile=window.location.pathname.split("/").pop()
    
    mongoose.connect("mongodb+srv://User0:Password@bookit-f6qff.mongodb.net/BookIT?retryWrites=true", {useNewUrlParser:true}, (err, db)=>{
        if(err) throw err; 

        profile.findOne({profile}, (err, user)=>{
            if(err) throw err;
            
            console.log(user);

        });
    });  
}