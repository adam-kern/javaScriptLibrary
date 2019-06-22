require('dotenv').config()

var express = require('express');
var app = express();
var log= require('./controllers/logcontroller')
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/log', log);
app.use('/api/user', user); 
//3 You could also write it this way without the require statement above.
//app.use('/api/user', require('./controllers/usercontrollers'));

//protected routes
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});