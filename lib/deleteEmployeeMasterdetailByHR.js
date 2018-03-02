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
    deleteEmployeeMasterdetailByHR: function(req,res){

        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');

        try{
            console.log("Connection established for delete Employee master detail for HR");
            mysql.query("UPDATE `employeemaster` SET `IsDeleted`=1,`ModifiedDate`=? where `EmployeeId`=?", [date,req.body.EmployeeId] , function(err,result) {
            
            if (err) throw err;
            console.log("Deleted Employee Master Detail for EmployeeId_" +req.body.EmployeeId);
            res.send("Deleted Employee Master Detail "+JSON.stringify(result));
            console.log(result);
            });
            }catch (err) { 
            console.error(err);
            }

        }
           
    }

