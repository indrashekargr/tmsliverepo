'use strict';

var fetchEmployeeMasterDetailsBasedOnUsername = require('../../lib/fetchEmployeeMasterDetailsBasedOnUsername');

module.exports = {
    get: function fetchEmployeeMasterDetailsBasedOnUsername_get(req, res) {
        //res.json(repository.get(req.params['id']));
        fetchEmployeeMasterDetailsBasedOnUsername.fetchEmployeeMasterDetailsBasedOnUsername(req,res,req.params['Username'])
    }    
};