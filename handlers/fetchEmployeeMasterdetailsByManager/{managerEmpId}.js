'use strict';

var fetchEmployeeMasterdetailsByManager = require('../../lib/fetchEmployeeMasterdetailsByManager');

module.exports = {
    get: function ffetchEmployeeMasterdetailsByManager_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchEmployeeMasterdetailsByManager.fetchEmployeeMasterdetailsByManager(req,res,req.params['managerEmpId']);
    }    
};