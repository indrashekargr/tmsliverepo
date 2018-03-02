'use strict';

var mysql=require('./mysqlConnection');
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');

/*var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
    password: 'int123$%^',
    database: 'demotms',
    port: 3306,     ssl: false
});*/

var http = require('http');
//var emp = [];

//LDAP Server External Config.
var extServerOptionsPost = {
    host: '172.16.2.13',    //182.71.249.210 //172.16.2.13 //172.16.2.13:3000
    port: '3000',           //3000 // 3001
    path: '/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }

};

var request = require('request');

//PCC Server External Config.
/*var allemployeSyn = {
    host: '172.16.1.119',
    path: '/imssServices/employeeServices.php?serviceName=allEmployeeDetails',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
*/

module.exports = {
    login: function(req,res) {

        /*if(req.body.username != 'arunram')*/ {


            var employee = JSON.stringify({
                'username': req.body.username,
                'password': req.body.password
            });
           // console.log(req.body.username & req.body.password)
            var username = req.body.username;
            if (req.body.username && req.body.password) {
                var reqPost = http.request(extServerOptionsPost, function (res1) {
                    res1.setEncoding('utf8');
                    res1.on('data', function (data) {
                        var resutldata = JSON.parse(data);
                        console.log(resutldata.status)
                        if (resutldata.status == 200) {

                            console.log("Connection established for login");
                            mysql.query("SELECT employeemaster.Password,employeemaster.Username,employeemaster.EmployeeId, employeemaster.FirstName,employeemaster.LastName,roles.Name,roles.RoleID,employeemaster.DateOfJoining,employeemaster.DateOfBirth,employeemaster.ContactNo,employeemaster.email FROM employeemaster JOIN roles ON employeemaster.RoleId = roles.RoleID WHERE employeemaster.Username = ? and employeemaster.RoleId IN (1,2,3,5,4,6,7)", [username], function (err, results) {
                                if (results[0]) {

                                    var message = "Successfully logged in";
                                    console.log("login success");
                                    console.log(results);
                                    res.send("User logged in Successfully")

                                }
                                else {
                                    console.log("Username does not exists");
                                    res.send("Username does not exists");
                                }
                            });

                        }
                        else {
                            res.send('Please enter the valid Username and Password');
                        }

                    });
                });
                reqPost.write(employee);
                reqPost.end();
                reqPost.on('error', function (e) {
                    console.error(e);
                });

            }
            else {

                res.send('Please enter the valid Username and Password');


            }
        }
      /*  else {
            console.log("Connection established for login");
            connection.query("SELECT employeemaster.Password,employeemaster.Username,employeemaster.EmployeeId, employeemaster.FirstName,employeemaster.LastName,roles.Name,roles.RoleID,employeemaster.DateOfJoining,employeemaster.DateOfBirth,employeemaster.ContactNo,employeemaster.email FROM employeemaster JOIN roles ON employeemaster.RoleId = roles.RoleID WHERE employeemaster.Username = 'arunram' and employeemaster.RoleId IN (1,2,3,5,4,6,7)",  function (err, results) {
                if (!results[0]) {
                    console.log("Username does not exists");
                    res.send("Username does not exists");

                }
                else {
                    var message = "Successfully logged in";
                    console.log("login success");
                    console.log(results);
                    res.send("User logged in Successfully")
                }
            });
        }*/
    }
}

/*request('http://172.16.1.119/imssServices/employeeServices.php?serviceName=allEmployeeDetails', function (error, response, body) {
                                console.log('error:', error); // Print the error if one occurred
                                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                                console.log('body:', body); // Print the HTML for the Google homepage.
                                //console.log('body:', typeof body); // Print the HTML for the Google homepage.
                                // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
                                console.log('body:', JSON.parse(body).employeeDetails); // Print the HTML for the Google homepage.


                            });*/


/*  var allemployeSyn = {
      host: '172.16.1.119',
      path: '/imssServices/employeeServices.php?serviceName=allEmployeeDetails',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };*/
/*   var reqGet = http.request(allemployeSyn, function(res2) {

           res2.setEncoding('utf8');
           res2.on('data', function (data) {
              // var resutldata1=JSON.parse(data);
              // console.log(resutldata1)
              // console.log(resutldata1);
               console.log(data);
           });
   });

   reqGet.end();
   reqGet.on('error', function(e) {
       console.error(e);
   }); */

/*  http.request(Syncfromlive, function (res12) {
   //    res12.setEncoding('utf8');
       res12.on('data', function (data) {
           //var resutldata=JSON.parse(data);
           console.log(data)

       });

       }).end(); */


/*  http.request(Syncfromlive, function (res2) {
      res2.setEncoding('utf8');
      res2.on('data', function (data) {
         // var resutldata1=JSON.parse(data.toString());
          console.log(data)
      });

  }).end(); */