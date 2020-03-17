let db = require('../util/database');

// Add a single individual to the database
function addArtist(data) {
    let sql = `Insert into artists (name, about, image) values ('${data.name}', '${data.about}', '${data.image}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllArtists() {
    return db.execute('Select * from artists');
}

// Gets a specific individual from the database
function getArtist(id) {
    return db.execute("Select * from artists where id = " + id);
}

function deleteArtist(id) {
    db.execute(`DELETE FROM artists WHERE id = ${id}`)
}

module.exports = {
    add : addArtist,
    getall : getAllArtists,
    getartist: getArtist,
    delete: deleteArtist
}