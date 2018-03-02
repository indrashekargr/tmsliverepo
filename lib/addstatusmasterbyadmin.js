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
    addstatusmasterbyadmin: function(req,res){
     
        var StatusName = req.body.StatusName;
      
        if (!req.body.StatusName){ 
       
        console.log("StatusName required");
        return res.status(401).send({success: false, message: 'StatusName required'});
        
        }
        if (!req.body.Description){ 
       
        console.log("Description required");
        return res.status(401).send({success: false, message: 'Description required'});
        
        }  
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        var addstatusmasterbyadmin={
        
        StatusName:req.body.StatusName,
        Description : req.body.Description,
        IsDeleted : 0,
        CreatedDate: date,
        };
        console.log("Connection established for add status master by admin");

        mysql.query('SELECT * FROM statusmaster WHERE StatusName = ? ', [StatusName]
        ,function(err,rows){
        if(err)
        console.log(err);
        
        if (!rows.length)
        {
        
        try{
        console.log("add status");
            mysql.query('INSERT INTO statusmaster SET ?', addstatusmasterbyadmin,
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
        }  catch (err) {
        console.error(err);
        }}
        else
        {
        console.log("already status exist");
        res.send("already status exist");
        }
        });
    }   
}