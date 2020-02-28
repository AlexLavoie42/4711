let fs = require('fs');

const PATH = 'artists.json';

function addFile(dataToAdd){
    fs.readFile(PATH, function(err, data){
        try{
            let jsondata = JSON.parse(data);
            jsondata.push(dataToAdd);
            console.log(jsondata);
            fs.writeFile(PATH, JSON.stringify(jsondata), function(err){if(err)throw err;});
            return true;
        }catch(e){
            console.log("No prior JSON Data, creating json Array with data.");
            fs.writeFile(PATH, "[" + JSON.stringify(dataToAdd) + "]", function(err){if(err)throw err;});
            return false;
        }
    });
}

function readFile(){
    fs.readFile(PATH, (err, data) => {
        if(err) return undefined;
        return JSON.parse(data);
    })
}

function deleteObject(object){
    let data = readFile(PATH);
    for(let i = 0; i < data.length; i++){
        if(JSON.stringify(data[i]) === JSON.stringify(object)){
            data.splice(i, 1);
            fs.writeFile(PATH, JSON.stringify(data), function(err){if(err)throw err;});
            return true;
        }
    }
    return false;
}


exports.addFile = addFile;
exports.readFile = readFile;
exports.deleteObject = deleteObject;