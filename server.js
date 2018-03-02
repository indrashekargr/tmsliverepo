'use strict';

var port = process.env.PORT || 8000;

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui'); 
var path = require('path');
var fs = require("fs");
var moment = require('moment');

var udate = moment(Date.now()).format('MM');
//console.log(moment(Date.now()).format('MM'));
if(udate = 1 ){
//connection.query("update db_tmp.employeemaster em  set integraExperience = (SELECT TIMESTAMPDIFF(MONTH, e.DateOfJoining, CURDATE()) FROM db_tmp.employeemaster e where e.Employeeid = em.Employeeid) , totalExperience = (SELECT TIMESTAMPDIFF(MONTH, e.DateOfJoining, CURDATE()) + e.PriorExprience FROM db_tmp.employeemaster e where e.Employeeid = em.Employeeid);");

}
var searchEmployeeResourceSkillsForHR = require('./lib/searchEmployeeResourceSkillsForHR');
var searchEmployeeResourceSkillsForManager = require('./lib/searchEmployeeResourceSkillsForManager');
var searchEmployeeResourceSkillsAllRatingForHR = require('./lib/searchEmployeeResourceSkillsAllRatingForHR');
var searchEmployeeResourceSkillsForBU = require('./lib/searchEmployeeResourceSkillsForBU');
var fetchemployeetrackingformanager = require('./lib/fetchemployeetrackingformanager');

fs.existsSync = fs.existsSync || require('path').existsSync;

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());

app.get('/fetchemployeetrackingformanager/UserId=:UserId/ReportingManager=:ReportingManager', fetchemployeetrackingformanager.fetchemployeetrackingformanager, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability', searchEmployeeResourceSkillsForHR.searchEmployeeResourceSkillsForHR, function(req, res, next){
    next();
    });

app.get('/searchEmployeeResourceSkillsAllRatingForHR/CategoryId=:CategoryId/SkillId=:SkillId/Availability=:Availability', searchEmployeeResourceSkillsAllRatingForHR.searchEmployeeResourceSkillsAllRatingForHR, function(req, res, next){
        next();
        });
app.get('/searchEmployeeResourceSkillsForManager/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsForManager.searchEmployeeResourceSkillsForManager, function(req, res, next){
    next();
    });

    app.get('/searchEmployeeResourceSkillsForBU/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/BuId=:BuId', searchEmployeeResourceSkillsForBU.searchEmployeeResourceSkillsForBU, function(req, res, next){
        next();
        });
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    });


app.get('/', function (req, res) {
    
res.sendFile(__dirname + '/dist/index.html');

 
});
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'dist/app')));
app.use(swaggerize({
    api: path.resolve('./config/swagger.json'),
    handlers: path.resolve('./handlers'),
    docspath: '/swagger' 
}));

// change four
app.use('/docs', swaggerUi({
    docs: '/swagger'  
}));

server.listen(port, function () { 
    console.log("TMS server connected");
});