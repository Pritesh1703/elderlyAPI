var express = require('express');
var Router=express.Router();

var branchCtrl=require('../controllers/branch.ctrl')


Router.get('/',branchCtrl.getAllBranches);
Router.get('/:latit/:longit',branchCtrl.nearbyBranches);
Router.post('/',branchCtrl.saveBranch);


module.exports=Router;