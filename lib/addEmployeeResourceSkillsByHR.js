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
    addEmployeeResourceSkillsByHR: function(req,res){
        try{
            var UserId = req.body.UserId;
            var CategoryId = req.body.CategoryId;
            var SkillId = req.body.SkillId;
            
            if (!req.body.UserId){ 
               
                return res.status(401).send({success: false, message: 'UserId required'});
                console.log("UserId required");
                }
                
                if (!req.body.CategoryId){ 
              
                return res.status(401).send({success: false, message: 'CategoryId required'});
                console.log("CategoryId required");
                }
                
                if (!req.body.SkillId){ 
                
                return res.status(401).send({success: false, message: 'SkillId required'});
                console.log("SkillId required");
                }
                
                if (!req.body.Rating){ 
              
                return res.status(401).send({success: false, message: 'Rating required'});
                console.log("Rating required");
                }
               var date;
               date = new Date().toISOString().slice(0, 19).replace('T', ' ');
               var addEmployeeSkills = {
                UserId: req.body.UserId,
                CategoryId: req.body.CategoryId,
                SkillId: req.body.SkillId,
                Rating : req.body.Rating,
                IsDeleted : 0,
                CreatedDate: date,
                CreatedBy: req.body.CreatedBy
                };
                console.log("Connection established for add employee resource skills data");
            mysql.query('SELECT * FROM employeeskillmaster WHERE UserId = ? AND CategoryId=? AND SkillId=? AND `IsDeleted`=0', [UserId,CategoryId,SkillId]
                ,function(err,rows){
                if(err)
                console.log(err);
                if (!rows.length)
                {

                    mysql.query('INSERT INTO employeeskillmaster SET ?', addEmployeeSkills,function(err, result) {
                if (err) throw err;
                
                res.send("Resource skills added successfully ");
                console.log(result);
                console.log("Employee Resource UserID_:- " + result.insertId);
                });
            }
            else
            {
            res.send("Selected Skill already exists for this Employee");
            console.log("Please select different skill");
            }
            }); 
            } catch (err) {
            console.error(err);
            
            };
        }
           
    }

