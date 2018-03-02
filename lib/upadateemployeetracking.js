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
upadateemployeetracking: function(req,res){
       

try{
console.log("Connection established for updated employee profile tracking");
    mysql.query("UPDATE `employeetrackingmaster` SET `ToDate`=? where `Id`=? AND `UserId`=?",[req.body.ToDate,req.body.Id,req.body.UserId], function(err, result) {
if (err) throw err;
res.send("Successfully updated Employee Tracking Profile "+JSON.stringify(result));
console.log(result);
console.log("updated Employee Tracking Profile data");
});
}
catch (err) {
console.error(err);
}
}      
 }