'use strict';
var mysql=require('./mysqlConnection'); 

/*var confi = require('../confi');

var connection = mysql.createConnection({
host: confi.host,
user: confi.user,
password: confi.password,
database: confi.database,
port: confi.port,     ssl: confi.ssl
}); */

module.exports = {
    
    fetchAllEmployeeDataByHR: function(req,res){
      try{
        console.log("Connection established for All Employee Data details");
          mysql.query("SELECT DISTINCT employeemaster.UserId AS UserId, employeemaster.EmployeeId AS EmployeeId, employeemaster.Username AS Username, employeemaster.Password AS Password, employeemaster.RoleId AS RoleId, employeemaster.ProfilePhoto AS ProfilePhoto, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.ContactNo AS ContactNo,employeemaster.Branch AS Branch,employeemaster.reportsToName AS  reportingmanager, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,5) AS totalExperience, skillmaster.SkillName AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving,employeemaster.CreatedBy AS CreatedBy,employeemaster.CreatedDate AS CreatedDate, employeemaster.ModifiedBy AS ModifiedBy,CONVERT(employeemaster.ModifiedDate,CHAR CHARACTER SET utf8) AS ModifiedDate FROM employeemaster JOIN skillmaster ON employeemaster.PrimarySkill = skillmaster.SkillId WHERE employeemaster.IsDeleted='0' AND employeemaster.empStatus='Active' AND length(employeemaster.EmployeeId) > 4", function(err, results) {
        //connection.query("SELECT DISTINCT employeemaster.UserId AS UserId, employeemaster.EmployeeId AS EmployeeId, employeemaster.Username AS Username, employeemaster.Password AS Password, employeemaster.RoleId AS RoleId, employeemaster.ProfilePhoto AS ProfilePhoto, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,businessunitmaster.buName AS BusinessUnit,employeemaster.BuId AS BuId,employeemaster.ContactNo AS ContactNo,employeemaster.ReportingManager AS Reporting_Head ,(SELECT IF(ISNULL(LastName), FirstName, CONCAT(FirstName, ' ', LastName)) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,5) AS totalExperience, skillmaster.SkillName AS PrimarySkill,designationmaster.DesignationName AS Designation, employeemaster.DateOfLeaving AS DateOfLeaving,employeemaster.CreatedBy AS CreatedBy,employeemaster.CreatedDate AS CreatedDate, employeemaster.ModifiedBy AS ModifiedBy,CONVERT(employeemaster.ModifiedDate,CHAR CHARACTER SET utf8) AS ModifiedDate FROM employeemaster JOIN skillmaster ON employeemaster.PrimarySkill = skillmaster.SkillId JOIN designationmaster ON employeemaster.DesignationId = designationmaster.Id JOIN businessunitmaster ON employeemaster.BuId = businessunitmaster.Id  WHERE employeemaster.IsDeleted='0'", function(err, results) {
               if (err) {   
                throw err;
               }else{
                for(var i=0; i<results.length;i++){
                    var date;
                  date = new Date().toISOString().slice(0, 19).replace(/T.*/, ' ');
                
                  results[i].DateOfLeaving=date;
                  results[i].CreatedDate=results[i].CreatedDate.toISOString().slice(0, 19).replace(/T.*/, ' ');
             
                  }
                return res.send(results);
               }
            });
        } catch (err) {
            console.error(err);
          }  
        }
           
    }

