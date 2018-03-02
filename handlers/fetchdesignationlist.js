'use strict';

var fetchdesignationlist = require('../lib/fetchdesignationlist');

module.exports = {
    
    get: function fetchdesignationlist_get(req, res) {
        fetchdesignationlist.fetchdesignationlist(req,res);
    }
};
