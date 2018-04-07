var Branch=require('../model/branch.model');

module.exports={
    saveBranch:function(req,res){
      
        var branch= new Branch(req.body);
        console.log(req.body);
        branch.save()
        .then(function(branches){
            res.status(201);
            res.json(branches);
        })
        .catch(function(err){
            res.status(500);
            res.send(err);
        })  
    
},

nearbyBranches:function(req,res){

    var latit= req.params.latitude || "1.279132";
    var longit= req.params.longitude || "103.85464";

    Branch.find({},{'__v':0})
    .exec()
    .then(function(branches){
        console.log(branches);
        if(branches){
            res.status(200);
            res.json(branches);
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
},

getAllBranches:function(req,res){

   
    Branch.find({},{'__v':0})
    .exec()
    .then(function(branches){
        if(branches){
            res.status(200);
            res.json(branches);
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