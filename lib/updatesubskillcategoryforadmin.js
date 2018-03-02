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

    updatesubskillcategoryforadmin: function(req,res){
       
        var SkillName = req.body.SkillName;
        var CategoryId=req.body.CategoryId;
        
        var date= new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        if (!req.body.SkillId){ 
        //logger.info({ success: false, message: 'SkillId must not empty'});
        console.log("SkillId required");
        return res.status(401).send({success: false, message: 'SkillId required'});
        }
        
        if (!req.body.CategoryId){ 
        //logger.info({ success: false, message: 'CategoryId must not empty'});
        console.log("CategoryId required");
        return res.status(401).send({success: false, message: 'CategoryId required'});
        }
        if (!req.body.SkillName){ 
        //logger.info({ success: false, message: 'SkillName must not empty'});
        console.log("SkillName required");
        return res.status(401).send({success: false, message: 'SkillName required'});
        }
        
        if (!req.body.Description){ 
            //logger.info({ success: false, message: 'Description must not empty'});
        console.log("Description required");
        return res.status(401).send({success: false, message: 'Description required'});  
        }
        
        try{ 
          //connection.end();   connection.connect();
            console.log("Connection established for updated Sub Skill Category Data for Admin");  
        console.log("update subcategory");
            mysql.query("UPDATE `skillmaster` SET `CategoryId`=?,`SkillName`=?,`Description`=?,`ModifiedDate`=?  where `SkillId`=?",[req.body.CategoryId,req.body.SkillName,req.body.Description,date,req.body.SkillId], function(err, result) {
        if (err) throw err;
        
        res.send("Successfully updated user details "+JSON.stringify(result));
        console.log(result);
        
        //logger.info({ success: true, message: 'Successfully subcategory updated ' });
        console.log("updated ");
        });
        console.log("Connection closed.");
        //connection.end();
        }
        catch (err) {
        console.error(err);
        }
    }        
}

