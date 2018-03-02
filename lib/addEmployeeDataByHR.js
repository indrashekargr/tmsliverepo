'use strict';

var dateFormat = require('dateformat');
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

var mysql=require('./mysqlConnection');

module.exports = {
    
    addEmployeeDataByHR: function(req,res){
        
        if (req.body.Password.length<6){ 
            return res.send("Password required");
            console.log("Password "+req.body.Password.length);
            } 
            if (req.body.ContactNo.length<10){ 
            return res.send("ContactNo required");
            console.log("ContactNo "+req.body.ContactNo.length);
            }
            
            if (!req.body.EmployeeId){ 
            return res.send("EmployeeId required");
            console.log("EmployeeId required");
            }
            
            if (!req.body.FirstName){ 
            return res.send("FirstName required");
            console.log("FirstName required");
            }
            
            if (!req.body.Password){ 
            return res.send("Password required");
            console.log("Password required");
            }
            
            if (!req.body.RoleId){ 
            return res.send("RoleId required");
            console.log("RoleId required");
            }
            
            if (!req.body.PrimarySkill){ 
            return res.send("PrimarySkill required");
            console.log("PrimarySkill required");
            }
            
            if (!req.body.DateOfBirth){ 
            return res.send("DateOfBirth required");
            console.log("DateOfBirth required");
            }
            
            if (!req.body.BranchId){ 
            console.log("BranchId required");
            }
            
            if (!req.body.email){ 
            return res.send("email required");
            console.log("email required");
            }
            
            if (!req.body.Gender){ 
            return res.send("Gender required");
            console.log("Gender required");
            }
            
            if (!req.body.DesignationId){ 
            return res.send("Designation required");
            console.log("Designation required");
            }

            if (!req.body.BuId){ 
                
                return res.send("Business Unit required");
                console.log("Business Unit required");
                }
            
            var date;
            date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            
            var email=req.body.email;
            var EmployeeId=req.body.EmployeeId;
            var ContactNo=req.body.ContactNo;
            var encryptedString = cryptr.encrypt(req.body.Password);
            
            var addEmployeeDataByHR={
            EmployeeId:req.body.EmployeeId,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Password : encryptedString,
          
            RoleId:req.body.RoleId,
            ContactNo:req.body.ContactNo,
            email:req.body.email,
            BuId:req.body.BuId,
            BranchId:req.body.BranchId,
            PriorExprience:req.body.PriorExprience,
            totalExperience:req.body.PriorExprience,
            integraExperience:0,
            Availability : req.body.Availability,
            DesignationId : req.body.DesignationId,
            QualificationId : req.body.QualificationId,
           
            PrimarySkill:req.body.PrimarySkill,
            Gender:req.body.Gender,
            AccessToResourceDatabase:req.body.AccessToResourceDatabase,
            DateOfBirth:dateFormat(req.body.DateOfBirth, "yyyy-mm-dd"),
            DateOfJoining:req.body.DateOfJoining,
            ReportingManager:req.body.ReportingManager,
            ProfilePhoto:"default.jpg",
            IsDeleted : 0,
            IsReportingHead : req.body.IsReportingHead,
            CreatedDate: date,
            Username : req.body.email.split('@')[0], 
            CreatedBy : req.body.CreatedBy,
            ModifiedBy : req.body.ModifiedBy
            };
        
            console.log("Connection established for add Employee Data");
        mysql.query('SELECT * FROM employeemaster WHERE email = ?', [email]
            ,function(err,rows){
            if(err)
            return console.log(err);
                mysql.query('SELECT * FROM employeemaster WHERE EmployeeId = ?', [EmployeeId]
            ,function(err1,rows1){
            if(err1)
            return console.log(err1);
                    mysql.query('SELECT * FROM employeemaster WHERE ContactNo = ?', [ContactNo]
            ,function(err2,rows2){
            if(err)
            return console.log(err);
            if (!rows.length&&!rows1.length&&!rows2.length)
            {
            
            console.log("add employee");
                mysql.query('INSERT INTO employeemaster SET ?', addEmployeeDataByHR,
            function(err, result) {
            if (err) throw err;
            
            res.send("Successfully added user details ");
            console.log(result);
            
            var email = require('mailer')
            , settings = {
                domain: "smtp.integramicro.co.in",
                host: "smtp.sendgrid.net",
                port : 587,
                authentication: "login",
                username: "indrashekargr@integramicro.co.in",
                password: "sGr81kDn",
                to : "req.body.email",
                from : "indrashekargr@integramicro.co.in",
                subject : "Hello from [Your App]!",
                data: {
                  name: "Swift"
                },
                template: "./template.mustache"
            };
            
            
            email.send(settings, function(err, result) {
              if(err) {
              
              }
             
            });
            
            
            /*var transporter = nodeMailer.createTransport({
                host: 'smtpauth.bizmail.net4india.com',
                port: 25,
                secureConnection: false,
                auth: {
                    user: 'indrashekargr@integramicro.co.in',
                    pass: 'sGr81kDn'
                }
            });
            
            var mailOptions = {
                      from: '"Indra Shekar" <indrashekargr@integramicro.co.in>', // sender address
                      to: req.body.email, // list of receivers
                      subject: 'Hello ', // Subject line
                    text: 'Hello world ', // plaintext body
                     html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js'
                  };
            
                  transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }
            
                console.log('Message sent: ' + info.response);
            });*/
                  
            
            /*sendmail({
            from: 'indrashekargr@integramicro.co.in',
            to: req.body.email,
            subject: 'TMS Employee Registration',
            html: 'Successfully registered employee details with your mail '+ req.body.email + ' and use following credential to login Username: ' + req.body.email.split('@')[0] + ' and Password: ' +req.body.Password,
            
            }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
            }); */
            
            //logger.info({ success: true, message: 'Successfully added Employee for EmployeeID_ ' + req.body.EmployeeId});
            console.log("added Employee EmployeeID_:- " + result.insertId);
            });
            } else {
            if(rows.length && rows1.length && rows2.length){
            return res.send("email ,employeeId and ContactNo  exists");
            }
            else if(rows2.length){
            console.log("ContactNo already exists ");
            return res.send("ContactNo already exists");
            }
            else if(rows1.length){
            console.log("id already exists ");
            return res.send("id already exists");
            
            }
            else {
            console.log("email alraedy exists ");
            return res.send("email alraedy exists");
            }
            }
            });
            });
            });


        }
           
    }

