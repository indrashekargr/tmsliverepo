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
    viewSelfEmployeeResourceSkills: function(req,res){
        
        
try{

    console.log("Connection established for View Self Employee Detail");
    mysql.query('SELECT c.CategoryName,s.SkillName,r1.Rating,r1.ModifiedDate,r1.ModifiedBy FROM employeemaster r JOIN employeeskillmaster r1 JOIN categorymaster c JOIN skillmaster s ON r1.UserId = r.UserId AND r1.CategoryId = c.CategoryId AND r1.SkillId = s.SkillId AND r.UserId = ?',[req.params.UserId], function(err, results) {
    if (err) throw err;
    
    if (results.length === 0) {
    res.status(403).send({success: false, message: 'Data not found for userID_' +req.params.UserId});
    console.log("Data not found for userID_ " +req.params.UserId)
    } else {
    
        var date;
        
       date = new Date().toISOString().slice(0, 19).replace(/T.*/, ' ');
    var response = { checkresourceskills_ID : results[0].EmployeeSkillId };
    console.log("Employee resource skills for employee userID_" +req.params.UserId);
    results[0].ModifiedDate=date;
    res.send(results);
    console.log(results);
    }
    });
    } catch (err) {
    console.error(err);
    }

        }
           
    }

