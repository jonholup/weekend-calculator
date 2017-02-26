var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var input = req.body;
    var result;
    var numberOne = parseInt(input.x);
    var numberTwo = parseInt(input.y);
    if (input.type == 'Add'){
    result = numberOne + numberTwo;
    console.log(result);
  } else if (input.type == 'Subtract'){
    result = numberOne - numberTwo;
  } else if (input.type == 'Multiply'){
    result = numberOne * numberTwo;
  } else if (input.type == 'Divide'){
    result = numberOne / numberTwo;
  } else {
    res.status(400);
  }
  res.status(200).send({result: result});
});

module.exports = router;
