/**
 * Created by iZel on 3/28/17.
 */
let express = require('express');
let router = express.Router();
let ContentGroup= require('../schemas/contentGroup');

let parent = require('../schemas/service.resource');

module.exports = parent(router,ContentGroup);
