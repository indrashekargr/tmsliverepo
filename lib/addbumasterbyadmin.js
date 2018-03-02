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
addbumasterbyadmin: function(req,res){

var buName = req.body.buName;

if (!req.body.buName){ 

console.log("buName required");
return res.status(401).send({success: false, message: 'buName required'});

}
if (!req.body.Description){ 

console.log("Description required");
return res.status(401).send({success: false, message: 'Description required'});

}  
var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

var addbumasterbyadmin={

buName:req.body.buName,
Description : req.body.Description,
IsDeleted : 0,
CreatedDate: date,
CreatedBy:req.body.CreatedBy
};

console.log("Connection established for add business unit");
    mysql.query('SELECT * FROM businessunitmaster WHERE buName = ? ', [buName]
,function(err,rows){
if(err)
console.log(err);

if (!rows.length)
{

try{
console.log("add business unit");
    mysql.query('INSERT INTO businessunitmaster SET ?', addbumasterbyadmin,
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
console.log("already unitName exist");
res.send("already unitName exist");
}
});
}   
}