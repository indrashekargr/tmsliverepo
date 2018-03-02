'use strict';

var branchlistforhr = require('../lib/branchlistforhr');

module.exports = {
    
    get: function branchlistforhr_get(req, res) {
        branchlistforhr.branchlistforhr(req,res);
    }
};
