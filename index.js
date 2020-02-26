let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile(path.join("index.html"))
});

app.post('/add-artist', (req, res) => {

});

app.listen(3000);