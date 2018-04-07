var mongoose=require('mongoose');

module.exports=mongoose.model('Appointment',{

    accountid: String,
    appointmentdate: Date,
    message: String
})

