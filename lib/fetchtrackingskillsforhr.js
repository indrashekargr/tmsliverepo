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
    fetchtrackingskillsforhr: function(req,res){
        var date2 = new Date();
        try{
          //connection.end();   connection.connect();
            console.log("Connection established for statuslists");
                console.log("fetchtracking skills");
            mysql.query('SELECT employeemaster.EmployeeId,employeemaster.FirstName,employeemaster.LastName ,employeemaster.email,employeemaster.Branch AS Branch,employeemaster.ReportingManager AS Reporting_Head ,employeemaster.reportsToName AS  reportingmanager ,CASE WHEN  MAX(employeeskillmaster.ModifiedDate) >=MAX(employeeskillmaster.CreatedDate)  THEN MAX(employeeskillmaster.ModifiedDate) WHEN  MAX(employeeskillmaster.ModifiedDate) IS NULL OR MAX(employeeskillmaster.CreatedDate)>=MAX(employeeskillmaster.ModifiedDate) THEN MAX(employeeskillmaster.CreatedDate) END AS lastModified FROM employeeskillmaster,employeemaster WHERE employeemaster.UserID=employeeskillmaster.UserID GROUP BY employeeskillmaster.UserID',function(err, results) {
                
               if (err) throw err;
                if (results.length === 0) {
                  res.status(403).send({success: false, message: 'Data not found'});
                  //logger.info({ success: false, message: 'Data not found'});
                } else {
                        
                    for(var i=0; i<results.length;i++)
                    
                    {
                        console.log("results[i].lastModified"+results[i].lastModified);
                        
                        console.log("date 2"+date2);
                        var date1 = results[i].lastModified;
                        var date3 = new Date(date1);
                        var timeDiff = Math.abs(date2.getTime() - date3.getTime());
                        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
                        results[i]["daysago"]=diffDays;
                        results[i]["lastModifiedDate"]=date3.toISOString().slice(0, 19).replace(/T.*/, ' ');
                }
                
                    res.send(results);
                //res.send("EmployeeId: "+ results[i].EmployeeId +" "+ "FirstName: "+ results[i].FirstName +" "+"LastName: "+results[i].LastName +" "+"email: "+ results[i].email +" "+ " ReportingManager: " + results[i].ReportingManager  +" " +"days ago: "+ diffDays);
                    console.log(results);
                  //  logger.info({ success: true, message: 'Successfully fetched tracking skills'});
                    
                
                }}
               )
               console.log("Connection closed.");
               //connection.end();
                }
                
            catch (err) {
              console.error(err);
            }
        }
           
    }
