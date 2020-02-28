let express = require('express');
let path = require('path');
let hbs = require('express-handlebars');
let quickJSON = require('./jsonUtils');
let app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultView: 'home'
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    quickJSON.readFile((json) => {
        res.render('home', {artists: json, layout: false})
    });
});

app.post('/add-artist', (req, res) => {
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.image;

    quickJSON.readFile((json) => {
        let id = (json != undefined) ? json.length : 0;
        quickJSON.addFile({id: id, name: name, about: about, image: image});

        res.redirect(301, '/');
    });
});

app.get('/delete-artist/:id', (req, res) => {
    console.log(req.params['id']);
    quickJSON.deleteArtist(req.params['id']);

    res.redirect(301, '/');
});

app.listen(3000);