'use strict';

var adddemodata = require('../lib/adddemodata');

module.exports = {
    
    post: function adddemodata_post(req, res) {
        adddemodata.adddemodata(req,res,req.params['adddemodata']);
    }
};
