'use strict';

//var mysql=require('./mysqlConnection');

//var fetchAllReportingHeads = require('./fetchAllReportingHeads'); 

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
    fetchstatusmasterlist: function(req,res){
        try{
            //var id = req.params.id;
          //connection.end();   connection.connect();
            console.log("Connection established for statuslists");

            mysql.query("SELECT  DISTINCT Id,StatusName,Description from statusmaster  WHERE statusmaster.IsDeleted='0'", function(err, results) {
            
            if (err) throw err;
            if (results.length === 0) {
            // res.json({success: false, message: 'Data not found'});
            res.status(403).send({ success: false, message: 'Data not found '});
            //logger.info({ success: false, message: 'no data'});
            } else {
            console.log("skilllist");
            res.send(results);
            //logger.info({ success: true, message: 'Successfully fetched skills'});
            console.log(results);
            }
            });
            console.log("Connection closed.");
            //connection.end();
            }
            catch (err) {
            console.error(err);
            }
        }
           
    }

