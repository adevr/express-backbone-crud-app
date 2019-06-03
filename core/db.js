'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'homestead',
    password: 'secret',
    database : 'backbone_app'
});


connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connected as id "+ connection.threadId);
});

module.exports = connection;