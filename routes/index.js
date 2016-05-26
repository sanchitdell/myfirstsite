var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
    // res.send(req.body.title + " desc " + req.body.description);
    testfunction(req.body.title, req.body.description,res);

});

function  testfunction(parameter1, parameter2,res) {
    if (parameter1 != null) {
        res.send(parameter1);
    }
};

module.exports = router;
