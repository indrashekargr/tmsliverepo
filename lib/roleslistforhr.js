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

//var fetchAllReportingHeads = require('./fetchAllReportingHeads'); 

module.exports = {
    roleslistforhr: function(req,res){
        try{
          //connection.end();   connection.connect();
            console.log("Connection established for loroleslistforhr");
            mysql.query("SELECT RoleID, Name from roles order by Name ASC", function(err, results) {
            
            if (err) throw err;
            if (results.length === 0) {
            // res.json({success: false, message: 'Data not found'});
            res.status(403).send({ success: false, message: 'Data not found '});
            //logger.info({ success: false, message: 'no data'});
            } else {
            console.log("role list");
            res.send(results);
            //logger.info({ success: true, message: 'Successfully fetched roles'});
            console.log(results);
           // logger.info("all roles");
            }
            });
            console.log("Connection closed.");
            //connection.end();
            } catch (err) {
            console.error(err);
            }
        }
           
    }

