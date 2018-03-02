'use strict';

var fetchqualificationList = require('../lib/fetchqualificationList');

module.exports = {
    
    get: function fetchqualificationList_get(req, res) {
        fetchqualificationList.fetchqualificationList(req,res);
    }
};
