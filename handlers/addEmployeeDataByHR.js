'use strict';

var addEmployeeDataByHR = require('../lib/addEmployeeDataByHR');

module.exports = {
    post: function addEmployeeDataByHR_post(req, res) {
        addEmployeeDataByHR.addEmployeeDataByHR(req,res,req.params['addEmployeeDataByHR']);
    }
};
