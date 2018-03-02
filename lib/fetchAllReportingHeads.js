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
    fetchAllReportingHeads: function(req,res){
        try {
            mysql.query("SELECT EmployeeId,IF(ISNULL(LastName), FirstName, CONCAT(FirstName, ' ', LastName)) AS ManagerName FROM employeemaster WHERE IsReportingHead = '1' and IsDeleted='0'", function(err, results) {
            if (err) throw err;
            if (results.length === 0) {
            res.status(403).send({ success: false, message: 'Data not found'});
            } else {
            console.log("All Employee Data details");
            res.send(results);
            }
            });
            } catch (err) {
            console.error(err);
            }
        }
           
    } 

