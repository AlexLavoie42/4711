
function toggleForm() {
    const FORM = document.getElementById("artistForm");
    if(FORM.style.display === 'none' || FORM.style.display === ''){
        FORM.style.display = 'block';
    } else {
        FORM.style.display = 'none';
    }
}

function addArtist(){
    try {
        let artists = document.getElementById("artists");
        let name = document.getElementsByName('name')[0];
        let about = document.getElementsByName('about')[0];
        let image = document.getElementsByName('image')[0];

        if(name.value === '' || about.value === '' || image.value === ''){
            alert("All fields are required");
            return;
        }

        let newArtist = document.createElement("li");
        let div = document.createElement("div");
        let nameElement = document.createElement("h3");
        let pic = document.createElement("img");
        let aboutElement = document.createElement("h5");
        let deleteButton = document.createElement("input");

        newArtist.className = 'artist';
        pic.src = image.value;
        pic.alt = "Artist Image";
        nameElement.className = "text";
        nameElement.textContent = name.value;
        aboutElement.className = "text";
        aboutElement.textContent = about.value;
        deleteButton.className = "deleteArtist";
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.addEventListener("click", f => {newArtist.remove()});

        newArtist.appendChild(pic);
        div.appendChild(nameElement);
        div.appendChild(aboutElement);
        div.appendChild(deleteButton);
        newArtist.appendChild(div);
        artists.appendChild(newArtist);

        name.value = '';
        about.value = '';
        image.value = '';
    } catch {
        alert("Error adding artist. Please try again.");
    }
}