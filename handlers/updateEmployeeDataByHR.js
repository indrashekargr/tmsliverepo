'use strict';

var updateEmployeeDataByHR = require('../lib/updateEmployeeDataByHR');

module.exports = {
    
    put: function updateEmployeeDataByHR_put(req, res) {
        updateEmployeeDataByHR.updateEmployeeDataByHR(req,res,req.params['integraExperience'],req.params['date'],req.params['RoleId'],req.params['PrimarySkill'],req.params['IsReportingHead'],req.params['ModifiedBy'],req.params['Availability'],req.params['EmployeeId']);
        //updateEmployeeDataByHR.updateEmployeeDataByHR(req,res,req.params['FirstName'],req.params['LastName'],req.params['encryptedString'],req.params['ContactNo'],req.params['Gender'],req.params['PriorExprience'],req.params['integraExperience'],req.params['DateOfBirth'],req.params['DateOfJoining'],req.params['DateOfLeaving'],req.params['date'],req.params['RoleId'],req.params['PrimarySkill'],req.params['ReportingManager'],req.params['IsReportingHead'],req.params['ModifiedBy'],req.params['BuId'],req.params['EmployeeId']);
    }
};
