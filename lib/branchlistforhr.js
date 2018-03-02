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
    branchlistforhr: function(req,res){
        try{
          
            console.log("Connection established for branchlists");
            mysql.query("SELECT BranchId, BranchName from branch WHERE IsDeleted='0' order by BranchId ASC", function(err, results) {
            if (err){
      
            };
            if (results.length === 0) {
            res.status(403).send({ success: false, message: 'Data not found '});
            } else {
            console.log("managers");
            res.send(results);
        
            console.log(results);
            
            }
            });
            } catch (err) {
            console.error(err);
            
            };
        }
           
    }

