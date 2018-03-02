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
    addskillcategoryforadmin: function(req,res){
        try{

            var CategoryName = req.body.CategoryName;
            
                if (!req.body.CategoryName){ 
                
                console.log("CategoryName required");
                return res.status(401).send({success: false, message: 'CategoryName required'});
                
                }  
                if (!req.body.Description){ 
              
                console.log("Description required");
                return res.status(401).send({success: false, message: 'Description required'});
                
                }
                
                var date;
                date = new Date().toISOString().slice(0, 19).replace('T', ' ');

                var addskillcategoryforadmin={
                    
                CategoryName:req.body.CategoryName,
                Description : req.body.Description,
                IsDeleted : 0,
                CreatedDate: date,
                };
             
                console.log("Connection established for add skill category by admin");
            mysql.query('SELECT * FROM categorymaster WHERE CategoryName = ? ', [CategoryName]
                ,function(err,rows){
                if(err)
                console.log(err);
                
                if (!rows.length)
                {
                
                console.log("add category");
                    mysql.query('INSERT INTO categorymaster SET ?', addskillcategoryforadmin,
                function(err, result) {
                if (err) throw err;
                
                res.send("Successfully added "+JSON.stringify(result));
                console.log("Successfully added :- " + result.insertId);
                console.log("added");
                });
                }   
                else
                {
                console.log("already category exist");
                res.send("already category exist");
                }
                });
        }catch (err) {
            console.error(err);
            }
        }
    }   