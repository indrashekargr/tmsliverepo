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
    adddesignationforadmin: function(req,res){
     
        var DesignationName = req.body.DesignationName;
        if (!req.body.DesignationName){ 
        console.log("DesignationName required");
        return res.status(401).send({success: false, message: 'DesignationName required'});
        }
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        var adddesignationforadmin={
        
        DesignationName:req.body.DesignationName,
        IsDeleted : 0,
        CreatedDate: date,
        };
   
        console.log("Connection established for add business unit");
        mysql.query('SELECT * FROM designationmaster WHERE DesignationName = ? ', [DesignationName]
        ,function(err,rows){
        if(err)
        console.log(err);
        
        if (!rows.length)
        {
        
        try{
        console.log("add designation");
            mysql.query('INSERT INTO designationmaster SET ?', adddesignationforadmin,
        function(err, result) {
        if (err) throw err;
        if(result.length==0)
        {
        res.status(403).send({ success: false, message: 'data not inserted'});
       
        }
        else{
        
        
        res.send("Successfully added"+JSON.stringify(result));
        console.log(result);
       
        console.log("added");
        }
        });
        console.log("Connection closed.");
        
        }  catch (err) {
        console.error(err);
        }}
        else
        {
        console.log("already designation exist");
        res.send("already designation exist");
        
        }
        });
    }   
}