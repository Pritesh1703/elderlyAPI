var express = require('express');
var Router=express.Router();

var appointmentCtrl=require('../controllers/appointment.ctrl')

Router.post('/',appointmentCtrl.createAppointment);
Router.get('/:id',appointmentCtrl.showAppointments);

module.exports=Router;