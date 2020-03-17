artistModel = require('../models/artistModel');
loginController = require('../controllers/loginController');

exports.addArtist = (req, res) => {
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.image;
    artistModel.add({name: name, about: about, image: image});

    res.redirect(301, '/artists');
};

exports.deleteArtist = (req, res) => {
    artistModel.delete(req.params['id']);

    res.redirect(301, '/artists');
};

exports.getArtists = (req, res) => {
    if(loginController.isLoggedIn()) {
        let artists = artistModel.getall();
        artists.then( (rows, err) => {
            res.render("../views/artistView", {artists: rows[0], layout: false});
        }).catch(err =>{
            console.log("error: " + err);
        });
    }
    else res.redirect(301, '/');
};