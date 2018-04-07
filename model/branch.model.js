var mongoose=require('mongoose');

module.exports=mongoose.model('Branch',{
    name: String,
    address: String,
    postal_code: String,
    latitude: String,
    longitude: String,
    SMSQ: String,
    operatingHours: String
})