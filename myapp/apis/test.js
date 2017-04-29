var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.response(req, next, 200, {"응답": req.query.text.replace("바보", "개바보")});
});

router.post('/', function(req, res, next) {
    res.response(req, next, 200, {"응답": req.body.text});
});

module.exports = router;
