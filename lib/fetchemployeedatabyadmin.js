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

module.exports = {
    fetchemployeedatabyadmin: function(req,res){
       
        var managerEmpId = req.params.managerEmpId;
        
        try {

       
          console.log("Connection established for resource user details for manager");

            mysql.query("SELECT DISTINCT employeemaster.UserId AS UserId, employeemaster.EmployeeId AS Employee_No, employeemaster.Username AS Username, employeemaster.Password AS Password, employeemaster.RoleId AS RoleId, employeemaster.ProfilePhoto AS ProfilePhoto,employeemaster.ReportingManager AS Reporting_Head ,(SELECT IF(ISNULL(LastName), FirstName, CONCAT(FirstName, ' ', LastName)) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head AND employeemaster.RoleId=2) AS reportingmanager,employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name,employeemaster.email AS Email, employeemaster.PriorExprience AS Prior_Exprience,employeemaster.integraExperience AS Integra_Exprience, (employeemaster.PriorExprience + employeemaster.integraExperience) AS Total_Exprience,designationmaster.DesignationName AS Designation, skillmaster.SkillName AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving FROM employeemaster JOIN skillmaster ON employeemaster.PrimarySkill = skillmaster.SkillId JOIN designationmaster ON employeemaster.DesignationId = designationmaster.Id where employeemaster.ReportingManager=" + connection.escape(managerEmpId), function(err, results) {
        
           if (err) throw err;
        
           if (results.length === 0) {
        
              res.send("Data not found for manager EmpId_ " +req.params.managerEmpId);
            
              console.log("Data not found for managerEmpId_ "+req.params.managerEmpId);
        
            } else {
        
            console.log("resource user details for manager based on"  + req.params.managerEmpId);
            res.send(results);
            console.log(results);
      
         }
        
         });
        } catch (err) {
        
          console.error(err);
        
        }
        

        }
           
    }

