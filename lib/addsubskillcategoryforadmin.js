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
    addsubskillcategoryforadmin: function(req,res){

        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');

        var SkillName = req.body.SkillName;
        var CategoryId=req.body.CategoryId;
       
        if (!req.body.CategoryId){ 
        
        console.log("CategoryId required");
        return res.status(401).send({success: false, message: 'CategoryId required'});
        
        }
        if (!req.body.SkillName){ 
        
        console.log("SkillName required");
        return res.status(401).send({success: false, message: 'SkillName required'});
        
        }    
        if (!req.body.Description){ 
     
        console.log("Description required");
        return res.status(401).send({success: false, message: 'Description required'});
        
        }  
        var addsubskillcategoryforadmin={
        CategoryId:req.body.CategoryId,
        SkillName:req.body.SkillName,
        Description : req.body.Description,
        IsDeleted : 0,
        CreatedDate: date,
        
        };

        console.log("Connection established for add sub skill category master by admin");
        mysql.query('SELECT * FROM skillmaster WHERE SkillName = ?  AND CategoryId=? ', [SkillName,CategoryId]
        ,function(err,rows){
        if(err)
        console.log(err);
        
        if (!rows.length)
        {
        
        console.log("add  subcategory");
        try{
            mysql.query('INSERT INTO skillmaster SET ?', addsubskillcategoryforadmin,
        function(err, result) {
        if (err) throw err;
        
        res.send("Skill added successfully"+JSON.stringify(result));
        console.log(result);
        console.log("added");
        });
        }
        
        catch (err) {
        console.error(err);
        }
        }
        else
        {
        console.log("already subcategory exists");
        res.send("already subcategory exists");
        }
        });
       
    }   
}