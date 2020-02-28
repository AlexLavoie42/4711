
function toggleForm() {
    const FORM = document.getElementById("artistForm");
    if(FORM.style.display === 'none' || FORM.style.display === ''){
        FORM.style.display = 'block';
    } else {
        FORM.style.display = 'none';
    }
}

function loadArtists(){
    let ids = window.localStorage.getItem("idInc");
    if(ids !== undefined) {
        ids = Number(ids);
        let artists = document.getElementById("artists");
        for (let i = 0; i <= ids; i++) {
            let artistInfo = JSON.parse(window.localStorage.getItem(i.toString()));
            if(artistInfo !== null) {
                let id = artistInfo[0];
                let name = artistInfo[2];
                let about = artistInfo[3];
                let image = artistInfo[1];

                let newArtist = document.createElement("li");
                let div = document.createElement("div");
                let nameElement = document.createElement("h3");
                let pic = document.createElement("img");
                let aboutElement = document.createElement("h5");
                let deleteButton = document.createElement("input");

                newArtist.className = 'artist';
                newArtist.id = id;
                pic.src = image;
                pic.alt = "Artist Image";
                nameElement.className = "text";
                nameElement.textContent = name;
                aboutElement.className = "text";
                aboutElement.textContent = about;
                deleteButton.className = "deleteArtist";
                deleteButton.type = 'button';
                deleteButton.value = 'Delete';
                deleteButton.addEventListener("click", f => {
                    deleteArtist(newArtist.id)
                });

                newArtist.appendChild(pic);
                div.appendChild(nameElement);
                div.appendChild(aboutElement);
                div.appendChild(deleteButton);
                newArtist.appendChild(div);
                artists.appendChild(newArtist);
            }
        }
    }
}

function searchArtist(){
    let search = document.getElementById("search");
    let artists = document.getElementById("artists");
    if(search.value != ""){
        for(let i = 0; i < artists.children.length; i++){
            let artist = artists.children[i];
            let name = artist.children[1].children[0];
            if(!name.textContent.toLowerCase().includes(search.value.toLowerCase())){
                artist.style.display = 'none';
            } else {
                artist.style.display = 'block';
            }
        }
    } else {
        for(let i = 0; i < artists.children.length; i++){
            artists.children[i].style.display = 'block';
        }
    }
}