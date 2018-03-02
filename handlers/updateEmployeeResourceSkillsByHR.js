'use strict';

var updateEmployeeResourceSkillsByHR = require('../lib/updateEmployeeResourceSkillsByHR');

module.exports = {
    
    put: function updateEmployeeResourceSkillsByHR_put(req, res) {
        updateEmployeeResourceSkillsByHR.updateEmployeeResourceSkillsByHR(req,res,req.params['Rating'],req.params['date'],req.params['ModifiedBy'],req.params['EmployeeSkillId'],req.params['UserId']);
    }
};
