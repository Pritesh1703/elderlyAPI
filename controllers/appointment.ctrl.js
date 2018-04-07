var Appointment=require('../model/appointment.model');

module.exports={

    createAppointment:function(req,res){
      
            var appointment= new Appointment(req.body);
            console.log(req.body);
            appointment.save()
            .then(function(appointments){
                res.status(201);
                res.json(appointments);
            })
            .catch(function(err){
                res.status(500);
                res.send(err);
            })  
        
    },

    showAppointments:function(req,res){

        var id=req.params.id;
        Appointment.find({accountid:id},{'__v':0})
        .exec()
        .then(function(appointments){
            if(appointments){
                res.status(200);
                res.json(appointments);
            }
            else{
                res.status(404);
                res.send("No appointments");
            }
        })
        .catch(function(err){
            res.status(500);
            res.send(err);
        })
    }
   
}