'use strict';

var addEmployeeStatusByManager = require('../lib/addEmployeeStatusByManager');

module.exports = {
    
    put: function addEmployeeStatusByManager_put(req, res) {
        addEmployeeStatusByManager.addEmployeeStatusByManager(req,res,req.params['Availability'],req.params['date'],req.params['EmployeeId']);
    }
};
