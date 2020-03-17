const mysql = require("mysql2");

pool = mysql.createPool({host: 'localhost', user: 'root', database: 'artistdb', password: 'VancouveR420'});
module.exports = pool.promise();