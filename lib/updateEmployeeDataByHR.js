'use strict';

//var mysql=require('./mysqlConnection');

var Cryptr = require('cryptr'),
cryptr = new Cryptr('myTotalySecretKey');
var dateFormat = require('dateformat');
/*var mysql      = require('mysql');
var connection = mysql.createConnection({
       host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
   password: 'int123$%^',
    database: 'demotms',
     port: 3306,     ssl: false
});*/

var mysql=require('./mysqlConnection');

module.exports = {

    updateEmployeeDataByHR: function(req,res){
       
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
       // var encryptedString = cryptr.encrypt(req.body.Password);
        
        console.log("date of birth"+req.body.DateOfBirth);
      /*  req.body.DateOfBirth=dateFormat(req.body.DateOfBirth, "yyyy-mm-dd");
        
        req.body.DateOfJoining=dateFormat(req.body.DateOfJoining, "yyyy-mm-dd"); */
        
       /* if(req.body.DateOfLeaving!==null){
        req.body.DateOfLeaving=dateFormat(req.body.DateOfLeaving, "yyyy-mm-dd");
        } */
        
        
        if(req.body.integraExperience==""){
            req.body.integraExperience=0;
        }
      /*  if(req.body.PriorExprience==""){
            req.body.PriorExprience=0;
        } */
        

        
        try {
          //connection.end();   connection.connect();
            console.log("Connection established for updated Employee Data");
            mysql.query("UPDATE `employeemaster` SET `integraExperience`=?,`ModifiedDate`=?,`RoleId`=?,`PrimarySkill`=?,`IsReportingHead`=?,`ModifiedBy`=?,`Availability`=? where `EmployeeId`=?", [req.body.integraExperience,date, req.body.RoleId,req.body.PrimarySkill,req.body.IsReportingHead,req.body.ModifiedBy,req.body.Availability,req.body.EmployeeId] , function(err,result) {
            //connection.query("UPDATE `employeemaster` SET `Password`=?,`ContactNo`=?,`integraExperience`=?,`ModifiedDate`=?,`RoleId`=?,`PrimarySkill`=?,`IsReportingHead`=?,`ModifiedBy`=?,`Availability`=? where `EmployeeId`=?", [encryptedString,req.body.ContactNo,req.body.integraExperience,date, req.body.RoleId,req.body.PrimarySkill,req.body.IsReportingHead,req.body.ModifiedBy,req.body.Availability,req.body.EmployeeId] , function(err,result) {
            //connection.query("UPDATE `employeemaster` SET `FirstName`=?,`LastName`=?,`Password`=?,`ContactNo`=?,`Gender`=?,`PriorExprience`=?, `integraExperience`=?,`DateOfBirth`=?,`DateOfJoining`=?,`ModifiedDate`=?,`RoleId`=?,`PrimarySkill`=?,`ReportingManager`=?,`IsReportingHead`=?,`ModifiedBy`=?,`Availability`=?,`BuId`=? where `EmployeeId`=?", [req.body.FirstName,req.body.LastName,encryptedString,req.body.ContactNo,req.body.Gender,req.body.PriorExprience,req.body.integraExperience,req.body.DateOfBirth,req.body.DateOfJoining,date, req.body.RoleId,req.body.PrimarySkill,req.body.ReportingManager,req.body.IsReportingHead,req.body.ModifiedBy,req.body.Availability,req.body.BuId, req.body.EmployeeId] , function(err,result) {
            //connection.query("UPDATE `employeemaster` SET `FirstName`=?,`LastName`=?,`DesignationId`=?,`Password`=?,`QualificationId`=?,`ContactNo`=?,`Gender`=?,`PriorExprience`=?, `integraExperience`=?,`DateOfBirth`=?,`DateOfJoining`=?,`ModifiedDate`=?,`RoleId`=?,`PrimarySkill`=?,`ReportingManager`=?,`IsReportingHead`=?,`ModifiedBy`=?,`Availability`=?,`BuId`=? where `EmployeeId`=?", [req.body.FirstName,req.body.LastName,req.body.DesignationId,encryptedString,req.body.QualificationId,req.body.ContactNo,req.body.Gender,req.body.PriorExprience,req.body.integraExperience,req.body.DateOfBirth,req.body.DateOfJoining,date, req.body.RoleId,req.body.PrimarySkill,req.body.ReportingManager,req.body.IsReportingHead,req.body.ModifiedBy,req.body.Availability,req.body.BuId, req.body.EmployeeId] , function(err,result) {
        
        if (err) throw err;
        console.log("Updated Resource Skills");
        res.send("Updated Resource Skills ");
        
        console.log(result);
        console.log("Successfully Updated Employee Data for employeeId_" + req.body.EmployeeId);
        
       // logger.info({ success: true, message: 'Successfully Updated Employee Data for employeeId_' + req.body.EmployeeId});
        });
        console.log("Connection closed.");
        //connection.end();
        }  catch (err) {
        console.error(err);
        }
        }
           
    }

