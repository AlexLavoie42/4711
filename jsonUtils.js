let fs = require('fs');

const PATH = 'artists.json';

function addFile(dataToAdd){
    readFile((json) => {
            json.push(dataToAdd);
            fs.writeFile(PATH, JSON.stringify(json), function(err){if(err)throw err;});
    });
}

function readFile(callback){
    try {
        fs.readFile(PATH, (err, data) => {
            if(err) return err;
            try {
                callback(JSON.parse(data));
            } catch (e) {
                fs.writeFile(PATH, "[]", function(err){
                    if(err) throw err;
                    callback([]);
                });
            }
        });
    } catch (e) {
        fs.writeFile(PATH, "[]", function(err){
            if(err) throw err;
            callback([]);
        });
    }
}

function deleteArtist(id){
    console.log("?")
    readFile((json) => {
        json.splice(id, 1);
        fs.writeFile(PATH, JSON.stringify(json), function (err) {
            if (err) throw err;
        });
    });
}


exports.addFile = addFile;
exports.readFile = readFile;
exports.deleteArtist = deleteArtist;