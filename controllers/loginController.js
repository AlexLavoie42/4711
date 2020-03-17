artistModel = require('../models/artistModel');

let loggedIn = false;

exports.login = (req, res) => {
    let user = req.body.user;
    let pass = req.body.pass;
    if(user === 'A01052654' && pass === 'password'){
        loggedIn = true;
        res.redirect(301, '/artists');
    } else {
        res.redirect(301, '/');
    }
};

exports.logout = (req, res) => {
    loggedIn = false;
    res.redirect(301, '/login')
};

exports.isLoggedIn = () => {
    return loggedIn
};