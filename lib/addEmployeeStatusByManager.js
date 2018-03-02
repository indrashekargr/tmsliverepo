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
    addEmployeeStatusByManager: function(req,res){
       
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
     
        console.log("Connection established for add Employee Data by manager");
        mysql.query("UPDATE `employeemaster` SET `Availability`=?,`ModifiedDate`=? where `EmployeeId`=?", [req.body.Availability,date,req.body.EmployeeId] , function(err,result) {
        
        if (err) throw err;
        console.log("Updated Resource Skills");
        res.send("Updated Resource Skills "+JSON.stringify(result));
        console.log(result);
        });
        }
           
    }

