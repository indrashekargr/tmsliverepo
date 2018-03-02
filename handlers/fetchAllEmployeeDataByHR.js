'use strict';

var repository = require('../lib/employeeRepository');

module.exports = {
    get: function fetchAllEmployeeDataByHR_get(req, res) {
        repository.fetchAllEmployeeDataByHR(req,res);
    }
    
};