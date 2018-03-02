'use strict';

var deleteEmployeeResourceSkillsByHR = require('../lib/deleteEmployeeResourceSkillsByHR');

module.exports = {
    put: function deleteEmployeeResourceSkillsByHR_put(req, res) {
        deleteEmployeeResourceSkillsByHR.deleteEmployeeResourceSkillsByHR(req,res,req.params['date'],req.params['EmployeeSkillId'],req.params['UserId']);
    }
};
