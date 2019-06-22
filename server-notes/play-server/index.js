const express = require('express');
const app = express();
const playcontroller = require('./controllers/playcontrollers');
const usercontroller = require('./controllers/usercontroller');

const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.get('/', (req, res) => res.render('index'));

app.use('/user', usercontroller);
app.use('/play', playcontroller);

app.listen(3000, () => console.log('App is listening on 3000'));

