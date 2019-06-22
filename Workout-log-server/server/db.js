
const Sequelize = require('sequelize');

const sequelize = new Sequelize('wlserverchallenge', 'postgres', 'ackpostgres', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected to wlserverchallenge postgres database');
    },
    function (err) {
        console.log(err);
    }
);

module.exports = sequelize;