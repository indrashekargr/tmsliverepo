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
    deleteEmployeeResourceSkillsByHR: function(req,res){
       
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        
        if (!req.body.EmployeeSkillId){ 
        
        return res.status(401).send({success: false, message: 'EmployeeSkillId required'});
        console.log("EmployeeSkillId required");
        }
        
        if (!req.body.UserId){ 
       
        return res.status(401).send({success: false, message: 'UserId required'});
        console.log("UserId required");
        }
        
        try{ 
         
            console.log("Connection established for delete Employee resource skill for HR");
            mysql.query("UPDATE `employeeskillmaster` SET `IsDeleted`=1,`ModifiedDate`=? where `EmployeeSkillId`=? and `UserId`=?", [date,req.body.EmployeeSkillId, req.body.UserId] , function(err,result) {
            
            if (err) throw err;
            if(result.length === 0){
            res.send({success: false, message: 'Data not found' + req.body.UserId});
           
            console.log("Data not found for this UserId_ " + req.params.UserId)
            } else{
                console.log("Deleted Resource Skill for UserID_" +req.body.UserId);
            res.send("Deleted Resource Skills ");
            console.log(result);
           
            }
            });
            }catch (err) {
            console.error(err);
            
            }

        }
           
    }

