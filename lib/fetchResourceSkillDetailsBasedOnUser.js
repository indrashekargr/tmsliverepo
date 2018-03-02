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
    fetchResourceSkillDetailsBasedOnUser: function(req,res){
        try{
           
          //connection.end();   connection.connect();
            console.log("Connection established for qualification list");

            var UserId = req.params.UserId;
            mysql.query('SELECT DISTINCT employeeskillmaster.EmployeeSkillId, categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating,DATE_FORMAT(employeeskillmaster.CreatedDate,"%Y-%m-%d") AS CreatedDate, employeeskillmaster.CreatedBy AS CreatedBy, DATE_FORMAT(employeeskillmaster.ModifiedDate,"%Y-%m-%d") AS ModifiedDate, employeeskillmaster.ModifiedBy AS ModifiedBy FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeemaster.UserId = employeeskillmaster.UserId and employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.IsDeleted= 0 and employeeskillmaster.UserId =' + mysql.escape(UserId),function(err, results) {
            if (err) throw err;
            if (results.length === 0) {
            res.send({success: false, message: 'Data not found' + req.params.UserId});
            //logger.info({ success: false, message: 'Data not found for this UserId_ ' + req.params.UserId});
            console.log("Data not found for this UserId_ " + req.params.UserId)
            } else {
            
            console.log("populate manager resource skills details");
            res.send(results);
            //logger.info({ success: true, message: 'Successfully fetched Employee resource skills by Resource Co-ordinator based on UserId_  ' + req.params.UserId});
            
            
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

