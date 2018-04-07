var User=require('../model/user.model');

module.exports={

    getUser:function(req,res){
        var count=0;
        var pageSize= +req.params.pagesize || 10;
        var pageIndex= +req.params.pageindex || 0;
        var sortBy= req.query.sort || "name";
        var sortDirection= req.query.sortDirection?(req.query.sortDirection).toLowerCase()==="asc"?"":"-":"-";
        User.count()
        .exec()
        .then(function(cnt){
            count=cnt;
            var query=User.find({},{'__v':0})
                .skip(pageIndex * pageSize)
                .limit(pageSize)
                .sort(sortDirection + sortBy);
            return query.exec();
        })
        .then(function(users){

            var response={
                metadata :{total:count,numberOfPages:Math.ceil(count/pageSize)},
                data: users
            };
            res.status(200);
            res.json(response);
        })
        .catch(function(err){
            res.status(401);
            res.send("No User");
        })
        
    },
    getUserById:function(req,res){
        var id= req.params.id;
        User.findOne({accountid:id},{'__v':0})
        .exec()
        .then(function(user){
            if(user){
                res.status(200);
                res.json(user);
            }
            else{
                res.status(404);
                res.send("Not found");

            }
                
           
        })
        .catch(function(err){
            res.status(500);
            res.send("Try again later");
        })
    },

    saveUser:function(req,res){
        var user= new User(req.body);
        //console.log(req.body);
        user.save()
        .then(function(users){
            res.status(201);
            res.json(users);
        })
        .catch(function(err){
            res.status(500);
            res.send(err);
        })
        
    

    }

//     removeBooks:function(req,res){
//         var id=req.params.id;
//         Books.findByIdAndRemove({_id:id})
//         .then(function(err){
//             if(!err){
//                 res.status(204);
//                 res.send("Book removed successfully");
//             }
//             else{
//                 res.status(500);
//                 res.send("Facing issues deleting the book.Try again later");
//             }
//         })
//     },

//     updateBooks:function(req,res){
    
//         var Book=new Books(req.body);
//         var id=req.params.id;

//         Books.findByIdAndUpdate(id,{$set:{
//             bookname:Book.bookname,
//             author:Book.author,
//             price:Book.price,
//             available:Book.available
//         }})
//         .then(function(book){
//              res.status(200);
//              res.json(book);
//         })
//         .catch(function(err){
//             res.status(500);
//             res.send("Can not update.Please try again later");
//         })

//     }

// }

}