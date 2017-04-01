let express = require('express');
let router = express.Router();
let User= require('../schemas/user');

router.get('/', function(req, res, next) {
    User.find(function (err,resp) {
        if(err) handleError(res)(err);
        return res.json(resp);
    });
});

function handleError(res) {
    return function(error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = router;
