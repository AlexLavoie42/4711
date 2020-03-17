const express = require('express');
let artistController = require('../controllers/artistController');
const router = express.Router();

router.post('/add-artist', artistController.addArtist);

router.get('/delete-artist/:id', artistController.deleteArtist);

router.get('/artists', artistController.getArtists);

module.exports = router;