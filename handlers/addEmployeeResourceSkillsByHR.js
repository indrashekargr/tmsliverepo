'use strict';

var addEmployeeResourceSkillsByHR = require('../lib/addEmployeeResourceSkillsByHR');

module.exports = {
    
    post: function addEmployeeResourceSkillsByHR_post(req, res) {
        addEmployeeResourceSkillsByHR.addEmployeeResourceSkillsByHR(req,res,req.params['addEmployeeSkills']);
    }
};
