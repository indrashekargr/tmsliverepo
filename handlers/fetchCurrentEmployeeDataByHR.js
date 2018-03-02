'use strict';

var fetchCurrentEmployeeDataByHR = require('../lib/fetchCurrentEmployeeDataByHR');

module.exports = {
    
    get: function fetchCurrentEmployeeDataByHR_get(req, res) {
        fetchCurrentEmployeeDataByHR.fetchCurrentEmployeeDataByHR(req,res);
    }
};
