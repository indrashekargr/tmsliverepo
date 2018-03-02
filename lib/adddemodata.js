'use strict';
var confi = require('../confi');
var mysql      = require('mysql');
var connection = mysql.createConnection({
host: confi.host,
user: confi.user,
password: confi.password,
database: confi.database,
port: confi.port,     ssl: confi.ssl
});

/*var http = require('http');
 
var emp = [];

var extServerOptions = {
    host: '172.16.2.15',
    path: '/imssServices/employeeServices.php?serviceName=allEmployeeDetails',
    method: 'GET',
    headers: {
        'Content-Type': "text/html"
    }
};

function get() {
    http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
           emp = JSON.stringify(data);
          
            console.log(emp);
       
        });
 
    }).end();
};
 
get(); */
/*var http = require('http');
var emp = [];

var extServerOptionsPost = {
    host: '172.16.2.13',
    port: '3001',
    path: '/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',  
    }

};

var employee = JSON.stringify({
    'username': 'arunram',
    'password': 'test123'
});


var reqPost = http.request(extServerOptionsPost, function (res) {
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
        console.log('Posting Result:\n');
        process.stdout.write(data);
        console.log('\n\nPOST Operation Completed');
    });
});
 
// 7
reqPost.write(employee);
reqPost.end();
reqPost.on('error', function (e) {
    console.error(e);
});
 

reqPost.write(employee); */

var cron = require('node-cron');

var task = cron.schedule('05 14 * * 0-6', function(req,res) {
var moment = require('moment');
var udate = moment(Date.now()).format('MM');
var adddemodata={
name:udate
};
connection.query('INSERT INTO demotb SET ?', adddemodata,
function(err, result) {
if (err) throw err;
if(result.length==0)
{
res.status(403).send({ success: false, message: 'data not inserted'});

}
else{
//res.send("Successfully added"+JSON.stringify(result));
return result;

console.log(result);

console.log("added");
}
});
console.log('immediately started' );

}, false);

task.start();  


module.exports = { 
adddemodata: function(req,res){

if (!req.body.name){ 

console.log("Name required");
return res.status(401).send({success: false, message: 'name required'});

}

var moment = require('moment');
var udate = moment(Date.now()).format('MM');
var adddemodata={
name:udate
};

try{
console.log("add demo data table");
connection.query('INSERT INTO demotb SET ?', adddemodata,
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
}

}   
}