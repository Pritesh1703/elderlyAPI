var express = require('express');
var Router=express.Router();

var userCtrl=require('../controllers/user.ctrl')

Router.get('/',userCtrl.getUser);
Router.get('/:id',userCtrl.getUserById);
Router.post('/',userCtrl.saveUser);


module.exports=Router;