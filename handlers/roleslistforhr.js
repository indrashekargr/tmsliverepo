'use strict';

var roleslistforhr = require('../lib/roleslistforhr');

module.exports = {
    
    get: function roleslistforhr_get(req, res) {
        roleslistforhr.roleslistforhr(req,res);
    }
};
