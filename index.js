let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let hbs = require('express-handlebars');
let app = express();
let db = require('./util/database');
let loginController = require('./controllers/loginController');

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultView: 'home'
}));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

let artistRoutes = require('./routes/artists');
let loginRoutes = require('./routes/login');

app.get('/', (req, res) => {
    if(loginController.isLoggedIn()){
        res.render('artistView', {layout: false});
    } else {
        res.render('loginView', {layout: false});
    }
});

app.use(artistRoutes);
app.use(loginRoutes);

app.listen(process.env.PORT || 3000);