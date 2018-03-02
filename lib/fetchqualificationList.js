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
    fetchqualificationList: function(req,res){
        try{

           
            //var id = req.params.id;
            mysql.query("SELECT  DISTINCT Id,QualificationName from qualificationmaster  WHERE qualificationmaster.IsDeleted='0'", function(err, results) {
            
            if (err) throw err;
            if (results.length === 0) {
          
            res.status(403).send({ success: false, message: 'Data not found '});
            //logger.info({ success: false, message: 'no data'});
            } else {
            console.log("qualification list");
            res.send(results);
            //logger.info({ success: true, message: 'Successfully fetched skills'});
            console.log(results);
            }
            });
           
            //connection.end();
            }
            catch (err) {
            console.error(err);
            }
        }
           
    }

