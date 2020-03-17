const mysql = require("mysql2");

pool = mysql.createPool({host: 'remotemysql.com', user: 'HQF7vnsZyq', database: 'HQF7vnsZyq', password: 'W8T5dtqurR'});
module.exports = pool.promise();