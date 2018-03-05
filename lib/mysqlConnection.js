const mysql = require('mysql2');

var config =
{
   /* host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
    password: 'int123$%^',
    database: 'db_tmp',
    port: 3306,
    ssl: true */
   /* host: '172.16.1.119',
    user: 'root',
    password: 'root',
    database: 'tms',
    port: 3306 */
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'demotms',
    port: 3306
};
const conn = new mysql.createConnection(config);
conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
    console.log("Connection established.");
    }   
});
module.exports = conn;