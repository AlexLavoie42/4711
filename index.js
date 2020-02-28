let express = require('express');
let path = require('path');
let fs = require('fs');
let quickJSON = require('./jsonQuickCommand');
let app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {``
    res.sendFile(path.join("index.html"))
});

app.post('/add-artist', (req, res) => {
    let
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.image;

    quickJSON.addFile({id: id, name: name, about: about, image: image});

    res.redirect(301, '/');
});

app.listen(3000);