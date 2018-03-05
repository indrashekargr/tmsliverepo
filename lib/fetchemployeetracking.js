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
    fetchemployeetracking: function(req,res){
        try{
            console.log("Connection established for employee tracking");
            var UserId = req.params.UserId;
            mysql.query("SELECT  DISTINCT employeetrackingmaster.Id, case when employeetrackingmaster.ToDate = '0000-00-00' then 1 when isnull(employeetrackingmaster.ToDate) then 1 else 0 end as Action , employeetrackingmaster.UserId,statusmaster.StatusName AS type,employeemaster.EmployeeId,employeemaster.FirstName,employeemaster.LastName,employeemaster.ReportingManager AS Reporting_Head,employeemaster.reportsToName AS  reportingmanager,employeemaster.Branch AS Branch,employeemaster.integraExperience,employeemaster.totalExperience,employeetrackingmaster.ProjectName,employeetrackingmaster.CompanyName,CONVERT(employeetrackingmaster.FromDate,CHAR CHARACTER SET utf8) AS FromDate,CONVERT(employeetrackingmaster.ToDate,CHAR CHARACTER SET utf8) AS ToDate from employeetrackingmaster JOIN employeemaster ON employeemaster.UserId = employeetrackingmaster.UserId JOIN statusmaster ON employeetrackingmaster.type=statusmaster.Id WHERE employeetrackingmaster.IsDeleted='0' and employeetrackingmaster.UserId = "+ mysql.escape(UserId),function(err, results) {
            //connection.query("SELECT  DISTINCT employeetrackingmaster.Id,case when employeetrackingmaster.ToDate = '0000-00-00' then 1 else 0 end  as Action,employeetrackingmaster.UserId,employeemaster.EmployeeId,employeemaster.FirstName,employeemaster.LastName,employeemaster.ReportingManager AS Reporting_Head,(SELECT IF(ISNULL(LastName), FirstName, CONCAT(FirstName, ' ', LastName)) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager,employeemaster.integraExperience,employeemaster.totalExperience,employeetrackingmaster.ProjectName,employeetrackingmaster.CompanyName,CONVERT(employeetrackingmaster.FromDate,CHAR CHARACTER SET utf8) AS FromDate,CONVERT(employeetrackingmaster.ToDate,CHAR CHARACTER SET utf8) AS ToDate from employeetrackingmaster JOIN employeemaster ON employeemaster.UserId = employeetrackingmaster.UserId  WHERE employeetrackingmaster.IsDeleted='0' and employeetrackingmaster.UserId ="+ connection.escape(UserId),function(err, results) {
            if (err) throw err;
  
            console.log("Employee Tracking");
            if(results){
             /*   for(var i=0; i<results.length;i++){
                   if(results[i].FromDate != null || results[i].ToDate !=null ){

                        var date;
                        date = new Date().toISOString().slice(0, 19).replace(/T.*!/, ' ');
                        var todate;
                        todate = new Date().toISOString().slice(0, 19).replace(/T.*!/, ' ');
                        results[i].FromDate=date;
                        results[i].ToDate=todate;
                    }

                }*/
                res.send(results);
                console.log(results);
            }

            
            });
            }
            catch (err) {
            console.error(err);
            }
        }
           
    }

