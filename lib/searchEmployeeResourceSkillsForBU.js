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
searchEmployeeResourceSkillsForBU: function(req,res){

try{
  //connection.end();   connection.connect();
    console.log("Connection established for search all employee resource skills for BU");

    mysql.query('SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS Profile_Photo, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.ReportingManager AS Reporting_Head,(SELECT CONCAT(employeemaster.FirstName,employeemaster.LastName) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience,ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,1) AS totalExperience, skillmaster.SkillName AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving , categorymaster.CategoryName AS categoryName,statusmaster.StatusName AS Availability, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN statusmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeemaster.Availability = statusmaster.Id and employeeskillmaster.IsDeleted= 0 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ? and employeemaster.Availability = ? and employeemaster.BuId=?',[req.params.CategoryId,req.params.SkillId,req.params.Rating,req.params.Availability,req.params.BuId], function(err, results) {
    //connection.query('SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS Profile_Photo, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName, designationmaster.DesignationName AS Designation,employeemaster.ReportingManager AS Reporting_Head,(SELECT CONCAT(employeemaster.FirstName,employeemaster.LastName) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience,ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,1) AS totalExperience, skillmaster.SkillName AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving , categorymaster.CategoryName AS categoryName,statusmaster.StatusName AS Availability, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN designationmaster JOIN statusmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and designationmaster.Id = employeemaster.DesignationId and employeemaster.Availability = statusmaster.Id and employeeskillmaster.IsDeleted= 0 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ? and employeemaster.Availability = ? and employeemaster.BuId=?',[req.params.CategoryId,req.params.SkillId,req.params.Rating,req.params.Availability,req.params.BuId], function(err, results) {
//mysql.query('SELECT DISTINCT employeemaster.EmployeeId AS EmployeeNo, employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name, employeemaster.email AS Email, employeemaster.Availability AS Availability, categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeeskillmaster.IsDeleted= 0 and employeemaster.Availability = 1 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ? and employeemaster.AvailabilityStatus=?',[req.params.CategoryId,req.params.SkillId,req.params.Rating,req.params.AvailabilityStatus], function(err, results) {
console.log("category id"+req.params.CategoryId);
console.log("skill id"+req.params.SkillId);
//console.log("Rating "+req.params.Rating);
console.log("avail"+req.params.Availability);
if (err) throw err;

if (results.length === 0) {
//logger.info({ success: false, message: 'No Search found for categoryID_' +req.params.CategoryId});
// res.status(403).send({success: false, message: 'No Search found for categoryID_' +req.params.CategoryId}); 
res.send(results);

} else {

//var response = { checkresourceskills_ID : results[0].EmployeeSkillId };
console.log("resource skill details for categoryID_" +req.params.CategoryId);
// logger.info(response);
//logger.info({ success: false, message: 'Successfully searched employee data for categoryID_' +req.params.CategoryId});
res.send(results);
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

