let express = require('express');
let router = express.Router();
let User= require('../schemas/user');

let parent = require('../schemas/service.resource');

module.exports = parent(router,User);
