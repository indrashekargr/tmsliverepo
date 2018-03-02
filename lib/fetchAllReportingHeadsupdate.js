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
        fetchAllReportingHeadsupdate: function(req,res){
        try {
            console.log("Connection established for All Reporting_Head_Update Data");
            var id = req.params.id;
            mysql.query("SELECT DISTINCT EmployeeId,reportsToName FROM employeemaster WHERE empStatus='Active' AND EmployeeId!=" + mysql.escape(id), function(err, results) {
            //connection.query("SELECT EmployeeId,IF(ISNULL(LastName), FirstName, CONCAT(FirstName, ' ', LastName)) AS ManagerName FROM employeemaster WHERE IsReportingHead = '1' AND IsDeleted='0' AND EmployeeId!="+ mysql.escape(id), function(err, results) {
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

