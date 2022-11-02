var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";


/*
    var name = req.query.name; // user-controlled input
    var password = crypto.createHash('sha256').update(req.query.password).digest('base64');

    var sql = "select * from user where name = ? and password = ?"; // the query is parameterized
*/



    return db.one(q);
}

module.exports = do_auth;
