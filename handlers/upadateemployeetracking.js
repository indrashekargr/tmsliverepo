'use strict';

var upadateemployeetracking = require('../lib/upadateemployeetracking');

module.exports = {
    
    put: function upadateemployeetracking_put(req, res) {
        upadateemployeetracking.upadateemployeetracking(req,res,req.params['ToDate'],req.params['Id'],req.params['UserId']);
    }
};
