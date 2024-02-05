const path = require("path");

const controller = {
    renderHome: (req, res) => {
        res.render('home');
    },
    renderRegister: (req, res) => {
        res.render('register');
    },
renderLogin: (req, res) => {
    res.render('login');
    }
}
module.exports = controller;