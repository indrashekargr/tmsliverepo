'use strict';

var addtrackingemployee = require('../lib/addtrackingemployee');

module.exports = {
    
    post: function addtrackingemployee_post(req, res) {
        addtrackingemployee.addtrackingemployee(req,res,req.params['addtrackingemployee']);
    }
};
