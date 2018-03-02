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
    fetchdesignationlist: function(req,res){
        try{

            mysql.query("SELECT  DISTINCT Id,DesignationName from designationmaster  WHERE designationmaster.IsDeleted='0'", function(err, results) {
            
            if (err) throw err;
            if (results.length === 0) {
          
            res.status(403).send({ success: false, message: 'Data not found '});
         
            } else {
            console.log("designation list");
            res.send(results);
           
            console.log(results);
            }
            });
           
           
            }
            catch (err) {
            console.error(err);
            }
        }
           
    }

