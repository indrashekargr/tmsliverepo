'use strict';

/*var mysql      = require('mysql');
var connection = mysql.createConnection({
       host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
   password: 'int123$%^',
    database: 'demotms',
     port: 3306,     ssl: false
});*/

var mysql=require('./mysqlConnection');

var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');

module.exports = {
    fetchEmployeeMasterDetailsBasedOnBuId: function(req,res){
        try{

            console.log("Connection established for populate user details");

            var BuId = req.params.BuId;
            mysql.query('SELECT DISTINCT employeemaster.UserId AS UserId,employeemaster.EmployeeId AS EmployeeId,employeemaster.ProfilePhoto AS ProfilePhoto,employeemaster.Password AS Password, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.Username AS Username,employeemaster.buid AS buid,employeemaster.BuName AS BuName,employeemaster.designation AS designation,employeemaster.qualification AS qualification,employeemaster.RoleId AS RoleId,employeemaster.ReportingManager AS Reporting_Head ,employeemaster.reportsToName AS  reportingmanager,employeemaster.Branch AS Branch,employeemaster.Availability AS Availability,employeemaster.ReportingManager AS ReportingManager, employeemaster.email AS Email,employeemaster.ContactNo AS ContactNo, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, (employeemaster.PriorExprience + employeemaster.integraExperience) AS totalExperience, skillmaster.SkillName AS PrimarySkill,DATE_FORMAT(employeemaster.DateOfBirth,"%Y-%m-%d") AS DateOfBirth,DATE_FORMAT(employeemaster.DateOfJoining,"%Y-%m-%d") AS DateOfJoining,DATE_FORMAT(employeemaster.DateOfLeaving,"%Y-%m-%d") AS DateOfLeaving FROM employeemaster JOIN businessunitmaster ON employeemaster.BuId = businessunitmaster.Id JOIN skillmaster ON employeemaster.PrimarySkill = skillmaster.SkillId WHERE employeemaster.empStatus="Active" and length(employeemaster.EmployeeId) > 4 and employeemaster.RoleId != 7 and employeemaster.buid = ' + mysql.escape(BuId),function(err, results) {
            //connection.query(' SELECT DISTINCT employeemaster.UserId AS UserId,employeemaster.EmployeeId AS EmployeeId,employeemaster.ProfilePhoto AS ProfilePhoto,employeemaster.Password AS Password, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.Username AS Username,qualificationmaster.QualificationName AS HighestQualification, businessunitmaster.buName AS BusinessUnit,employeemaster.BuId AS BuId, employeemaster.QualificationId AS QualificationId,employeemaster.DesignationId AS DesignationId,employeemaster.RoleId AS RoleId,designationmaster.DesignationName AS Designation,employeemaster.ReportingManager AS Reporting_Head ,(SELECT CONCAT(employeemaster.FirstName,employeemaster.LastName) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager,employeemaster.Availability AS Availability,employeemaster.ReportingManager AS ReportingManager, employeemaster.email AS Email,employeemaster.ContactNo AS ContactNo, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, (employeemaster.PriorExprience + employeemaster.integraExperience) AS totalExperience, skillmaster.SkillName AS PrimarySkill,DATE_FORMAT(employeemaster.DateOfBirth,"%Y-%m-%d") AS DateOfBirth,DATE_FORMAT(employeemaster.DateOfJoining,"%Y-%m-%d") AS DateOfJoining,DATE_FORMAT(employeemaster.DateOfLeaving,"%Y-%m-%d") AS DateOfLeaving FROM employeemaster JOIN designationmaster ON designationmaster.Id = employeemaster.DesignationId JOIN qualificationmaster ON employeemaster.QualificationId = qualificationmaster.Id JOIN businessunitmaster ON employeemaster.BuId = businessunitmaster.Id JOIN skillmaster ON employeemaster.PrimarySkill = skillmaster.SkillId where employeemaster.RoleId != 7 and employeemaster.BuId = ' + connection.escape(BuId),function(err, results) {
            if (err) throw err;
            if (results.length === 0) {
            res.send({success: false, message: 'Data not found' + req.params.BuId});
            //logger.info({ success: false, message: 'Data not found for this EmployeeId_ ' + req.params.EmployeeId});
            console.log("Data not found for this EmployeeId_ " + req.params.BuId)
            } else {
            
            console.log("populate user details");
            
            for(var i=0; i<results.length;i++){
            results[i].Password =  cryptr.decrypt(results[i].Password);
            
            }
            res.send(results);
           // logger.info({ success: true, message: 'Successfully fetched Employee detail based on EmployeeId_  ' + req.params.EmployeeId});
            
            
            console.log(results);
            }
            });
            console.log("Connection closed.");
            //connection.end();
            } catch (err) {
            console.error(err);
            }
        }
           
    }

