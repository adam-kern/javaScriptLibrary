const Sequelize = require('sequelize');
const sequelize = new Sequelize('playtabase', 'postgres', 'ackpostgres', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => console.log('postgress db is connected'))
.catch(err => console.log(err));

module.exports = sequelize;