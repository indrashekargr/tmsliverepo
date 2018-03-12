'use strict';
var mysql=require('./mysqlConnection');
module.exports = {
    addFeedback: function(req,res){
        try{
            if (!req.body.EmployeeId){
                return res.status(401).send({success: false, message: 'EmployeeId required'});
                console.log("EmployeeId required");
                }
                if (!req.body.Type){
                return res.status(401).send({success: false, message: 'Type required'});
                console.log("Type required");
                }
                if (!req.body.Details){
                return res.status(401).send({success: false, message: 'Details required'});
                console.log("Details required");
                }
                if (!req.body.Status){
                return res.status(401).send({success: false, message: 'Status required'});
                console.log("Status required");
                }
               var cdate;
               cdate = new Date().toISOString().slice(0, 19).replace('T', ' ');
               var udate;
               udate = new Date().toISOString().slice(0, 19).replace('T', ' ');
               var addFeedback = {
                EmployeeId: req.body.EmployeeId,
                Type: req.body.Type,
                Details: req.body.Details,
                Status : req.body.Status,
                Remarks : req.body.Remarks,
                CreatedDate: cdate,
                UpdateDated: udate
            };
            console.log("Connection established for add formback form");
            mysql.query('INSERT INTO feedback SET ?', addFeedback,function(err, result) {
                if (err) throw err;
                
                res.send("Feedback form added successfully ");
                console.log(result);
                console.log("Feedback form ID_:- " + result.insertId);
                });
            } catch (err) {
            console.error(err);
            
            };
        }
           
    }

