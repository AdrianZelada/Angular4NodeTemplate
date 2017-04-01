/**
 * Created by iZel on 3/28/17.
 */
let express = require('express');
let router = express.Router();
let Content= require('../schemas/content');

let parent = require('../schemas/service.resource');

module.exports = parent(router,Content);
