var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/log');

router.post('/log', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        res.json({
          testdata: testdata 
        });
      }
    );
});

/*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});

/************************
* GET:  Get simple message from server
***********************/
router.get('/helloclient', function (req, res) {
  res.send('This is a message from the server to the client.')
})

/************************
* GET:  /one
***********************/
router.get('/:id', function (req, res) {

  TestModel
    .findAll({
      attributes: ['id', 'testdata']
    })
    .then(
      function findAllSuccess(data) {
        console.log("Controller data:", data);
        res.json(data);
      },
      function findAllError(err) {
        res.send(500, err.message);
      }
    );
});

module.exports = router;

