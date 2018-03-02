'use strict';

var fetchEmployeeMasterDetailsBasedOnBuId = require('../../lib/fetchEmployeeMasterDetailsBasedOnBuId');

module.exports = {
    get: function fetchEmployeeMasterDetailsBasedOnBuId_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchEmployeeMasterDetailsBasedOnBuId.fetchEmployeeMasterDetailsBasedOnBuId(req,res,req.params['BuId'])
    }    
};