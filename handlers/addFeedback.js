'use strict';

var addFeedback = require('../lib/addFeedback');

module.exports = {
    
    post: function addFeedback_post(req, res) {
        addFeedback.addFeedback(req,res,req.params['addFeedback']);
    }
};
