'use strict';

var deleteEmployeeMasterdetailByHR = require('../lib/deleteEmployeeMasterdetailByHR');

module.exports = {
    put: function deleteEmployeeMasterdetailByHR_put(req, res) {
        deleteEmployeeMasterdetailByHR.deleteEmployeeMasterdetailByHR(req,res,req.params['date'],req.params['EmployeeId']);
    }
};
