'use strict';

var fetchEmployeeMasterDetailsBasedOnEmpId = require('../../lib/fetchEmployeeMasterDetailsBasedOnEmpId');

module.exports = {
    get: function fetchEmployeeMasterDetailsBasedOnEmpId_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchEmployeeMasterDetailsBasedOnEmpId.fetchEmployeeMasterDetailsBasedOnEmpId(req,res,req.params['EmployeeId'])
    }    
};