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
    addtrackingemployee: function(req,res){
     
       
        if (!req.body.ProjectName){ 
       
        console.log("ProjectName required");
        return res.status(401).send({success: false, message: 'ProjectName required'});
        
        }
        if (!req.body.CompanyName){ 
       
        console.log("CompanyName required");
        return res.status(401).send({success: false, message: 'CompanyName required'});
        
        }

        var ProjectName = req.body.ProjectName;
        var UserId = req.body.UserId;

        var addtrackingemployee={
        UserId:req.body.UserId,
        ProjectName:req.body.ProjectName,
        CompanyName : req.body.CompanyName,
        IsDeleted : 0,
        FromDate:  req.body.FromDate,
        ToDate :  req.body.ToDate
        };
        console.log("Connection established for employee tracking profile");

        mysql.query('SELECT * FROM employeetrackingmaster WHERE ProjectName = ? AND UserId=?  ', [ProjectName,UserId]
        ,function(err,rows){
        if(err)
        console.log(err);
        if (!rows.length)
        {
        try{
        console.log("add employee tracking profile");
            mysql.query('INSERT INTO employeetrackingmaster SET ?', addtrackingemployee,
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
        console.log("already project exist");
        res.send("already project exist");
        }
        });
    }   
}