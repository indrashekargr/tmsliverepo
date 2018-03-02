'use strict';
var mysql      = require('mysql');
var forEach = require('async-foreach').forEach;

var async = require('async');
var mysql1=require('./mysqlConnection');
/*var connection = mysql.createConnection({
       host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
   password: 'int123$%^',
    database: 'demotms',
     port: 3306,     ssl: false
}); */

var pool = mysql.createPool({
    /*host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
    password: 'int123$%^',
    database: 'demotms',
    port: 3306,     ssl: false*/
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'demotms',
    port: 3306
});

var http = require('http');
var request = require('request');

/*var confi = require('../confi');

var connection = mysql.createConnection({
host: confi.host,
user: confi.user,
password: confi.password,
database: confi.database,
port: confi.port,     ssl: confi.ssl
}); */

module.exports = {
    externalemployeeRepository: function(req,res){
        try{
            console.log("Connection established for All Employee Data details");
            //external configuration : 182.71.249.210:8083 //internal configuration : 172.16.1.119
            request('http://172.16.1.119/imssServices/employeeServices.php?serviceName=allEmployeeDetails', function (error, response, body) {

                var json = JSON.parse(body);
                async.forEach(Object.keys(json.employeeDetails), function (i,callback){
                    json[i] = parseInt(i) + 1;
                    json[i] += 1;
                    var empId = json.employeeDetails[i].empId;
                    var empName = json.employeeDetails[i].empName;
                    var reportsToName = json.employeeDetails[i].reportsToName;
                    var reportsToId = json.employeeDetails[i].reportsToId;
                    var dateOfJoin = json.employeeDetails[i].dateOfJoin;
                    var priorexp = json.employeeDetails[i].priorexp;
                    var dateOfBirth = json.employeeDetails[i].dateOfBirth;
                    var imssEmail = json.employeeDetails[i].imssEmail;
                    var mobile = json.employeeDetails[i].mobile;
                    var designation = json.employeeDetails[i].designation;
                    var qualification = json.employeeDetails[i].qualification;
                    var gender = json.employeeDetails[i].gender;
                    var empStatus = json.employeeDetails[i].empStatus;

                    /*      if(empStatus == "Active") {*/
                    pool.getConnection(function(err, connection) {
                        // Use the connection
                        //var query1 = "INSERT INTO demotms.employeemaster (EmployeeId,FirstName,reportsToName,ReportingManager,DateOfJoining,PriorExprience,DateOfBirth,email,ContactNo,designation,qualification,Gender,empStatus) VALUES("+empId +","+"'"+empName+"'" +"'"+reportsToName+"'"+"'"+reportsToId+"'"+"'"+dateOfJoin+"'"+"'"+priorexp+"'"+"'"+dateOfBirth+"'"+"'"+imssEmail+"'"+"'"+mobile+"'"+"'"+designation+"'"+"'"+qualification+"'"+"'"+gender+"'"+"'"+empStatus+"'"+") ON DUPLICATE KEY UPDATE EmployeeId ="+empId +','+ "FirstName='" +empName +"'"+","+ "reportsToName='" +reportsToName +"'"+","+ "ReportingManager='" +reportsToId +"'"+","+ "DateOfJoining='" +dateOfJoin +"'"+","+ "PriorExprience='" +priorexp +"'"+","+ "DateOfBirth='" +dateOfBirth +"'"+","+ "email='" +imssEmail +"'"+","+ "ContactNo='" +mobile +"'"+","+ "designation='" +designation +"'"+","+ "qualification='" +qualification +"'"+","+ "Gender='" +gender +"'"+","+ "empStatus='" +empStatus +"'";
                        //var query1 = "INSERT INTO demotms.employeemaster (EmployeeId) VALUES(" + empId + ") ON DUPLICATE KEY update EmployeeId ="+ empId +";" + "UPDATE demotms.employeemaster set FirstName='" +empName +"'"+","+ "ReportingManager='" +reportsToId +"'"+","+ "DateOfJoining='" +dateOfJoin +"'"+","+ "PriorExprience='" +priorexp +"'"+","+ "DateOfBirth='" +dateOfBirth +"'"+","+ "email='" +imssEmail +"'"+","+ "ContactNo='" +mobile +"'"+","+ "Gender='" +gender +"' where EmployeeId ="+empId  ;

                        // var sql = con.query('call newAccount(?, ?, ?)', [accountTest.email, accountTest.password, accountTest.bit], function(err, result) {
                        connection.query('call `demotms`.`UPdatedate`(?, ?, ?,?, ?, ?,?, ?, ?,?,?,?,?)', [empId,empName,reportsToId,dateOfJoin,priorexp,dateOfBirth,imssEmail,mobile,gender,reportsToName,qualification,empStatus,designation], function (error, results, fields) {

                            // var query =" CALL `demotms`.`UPdatedate`(empId,empName,reportsToId,dateOfJoin,priorexp,dateOfBirth,imssEmail,mobile,gender)";
                            //connection.query(query1, function (error, results, fields) {
                            if(results){
                                connection.release();
                            }
                            if (error) throw error;
                        });
                    });
                    callback();
                }, function(err) {
                    console.log(json)
                });
            });
        } catch (err) {
            console.error(err);
        }
    }
}

