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
    fetchskillslist: function(req,res){
        try{
          //connection.end();   connection.connect();
            console.log("Connection established for skilllist");

            var id = req.params.id;
            mysql.query("SELECT  DISTINCT SkillId, SkillName,skillmaster.Description from skillmaster,categorymaster  WHERE skillmaster.IsDeleted='0' and skillmaster.CategoryId=categorymaster.CategoryId and skillmaster.CategoryId="+ mysql.escape(id), function(err, results) {
            
            if (err) throw err;
            if (results.length === 0) {
            // res.json({success: false, message: 'Data not found'});
            res.status(403).send({ success: false, message: 'Data not found '});
           // logger.info({ success: false, message: 'no data'});
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

