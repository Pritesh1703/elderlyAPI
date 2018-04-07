var mongoose= require('mongoose');

module.exports= mongoose.model("User",{

    name: String,
    accountid: {type:String},
    email: String,
    phone: String,
    customertype: String,
    age: String,
    longitude: String,
    latitude: String
    
})