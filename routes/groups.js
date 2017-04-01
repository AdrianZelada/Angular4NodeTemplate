/**
 * Created by iZel on 3/28/17.
 */
let express = require('express');
let router = express.Router();
let Group= require('../schemas/group');

let parent = require('../schemas/service.resource');

let extendRouter =parent(router,Group);

extendRouter.get('/populate',function (req,res) {
    Group.find({}).populate('userCreated').populate('members').exec(function (err,groups) {
        res.json(groups)
    })
});

module.exports = extendRouter;
