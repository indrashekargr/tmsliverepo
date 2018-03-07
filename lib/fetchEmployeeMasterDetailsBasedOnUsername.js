'use strict';

//var mysql=require('./mysqlConnection');

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
    fetchEmployeeMasterDetailsBasedOnUsername: function(req,res){
        try{

           // //connection.end();   connection.connect();
            console.log("Connection established for populate user details");
            var Username = req.params.Username;


            mysql.query(' SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS ProfilePhoto,employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.Username AS Username,employeemaster.Password AS Password,employeemaster.BuName AS BuName,employeemaster.email AS email,employeemaster.Availability AS Availability,employeemaster.designation AS designation,employeemaster.RoleId AS RoleId,employeemaster.buid AS BuId, roles.Name AS RoleName,employeemaster.ReportingManager AS ReportingHead, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, (employeemaster.PriorExprience + employeemaster.integraExperience) AS totalExperience, employeemaster.PrimarySkill AS PrimarySkill,employeemaster.IsReportingHead AS IsReportingHead FROM employeemaster JOIN roles ON employeemaster.RoleId = roles.RoleID where employeemaster.Username = ' + mysql.escape(Username),function(err, results) {

            //connection.query(' SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS ProfilePhoto,designationmaster.DesignationName AS Designation, employeemaster.EmployeeId AS EmployeeId,businessunitmaster.buName AS BusinessUnit,employeemaster.BuId AS BuId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.Username AS Username,employeemaster.Password AS Password,employeemaster.email AS email,employeemaster.Availability AS Availability,employeemaster.RoleId AS RoleId, roles.Name AS RoleName,employeemaster.ReportingManager AS ReportingHead, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, (employeemaster.PriorExprience + employeemaster.integraExperience) AS totalExperience, employeemaster.PrimarySkill AS PrimarySkill,employeemaster.IsReportingHead AS IsReportingHead FROM employeemaster JOIN roles ON employeemaster.RoleId = roles.RoleID JOIN designationmaster ON designationmaster.Id = employeemaster.DesignationId JOIN businessunitmaster ON employeemaster.BuId = businessunitmaster.Id where employeemaster.Username = ' + connection.escape(Username),function(err, results) {
            if (err) throw err;
            if (results.length === 0) {
            res.status(403).send({success: false, message: 'Data not found' + req.params.Username});
           // logger.info({ success: false, message: 'Data not found for this Username_ ' + req.params.Username});
            console.log("Data not found for this UserId_ " + req.params.Username)
            } else {
            
            console.log("populate user details");
            res.send(results);
            //logger.info({ success: true, message: 'Successfully fetched Employee detail based on UserId_  ' + req.params.Username});
            
            
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

