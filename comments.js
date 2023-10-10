// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/comments');

// ROUTES
// Get all comments for a post
router.route('/:post_id')
    .get(helpers.getComments)
    .post(helpers.createComment);

// Get, update, and delete a comment
router.route('/:post_id/:comment_id')
    .get(helpers.getComment)
    .put(helpers.updateComment)
    .delete(helpers.deleteComment);

module.exports = router;