'use strict';

var repository = require('../lib/externalemployeeRepository');

module.exports = {
    get: function externalemployeeRepository_get(req, res) {
        repository.externalemployeeRepository(req,res);
    }
};