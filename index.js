var express= require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var userRouter=require('./routes/user.routes');
var appointmentRouter=require('./routes/appointment.routes');
var branchRouter=require('./routes/branch.routes');

var app=express();

var port=process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server running on port:"+port);
});



mongoose.connect("mongodb://admin1:admin1@ds137089.mlab.com:37089/elderlyapi")
console.log("Connection to db successful");

app.use(bodyParser.json());

// app.get('/',function(req,res){
//     res.send("Welcome to DBS elderly Data API");
// })

app.use('/user',userRouter);
app.use('/appointment',appointmentRouter);
app.use('/branch',branchRouter);