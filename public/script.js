let xhttp = new XMLHttpRequest();

function toggleForm() {
    const FORM = document.getElementById("artistForm");
    if(FORM.style.display === 'none' || FORM.style.display === ''){
        FORM.style.display = 'block';
    } else {
        FORM.style.display = 'none';
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

function deleteArtist(id){
    if(window.confirm("Are you sure you want do delete this artist?")){
        xhttp.open("POST", "/delete-artist");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("id="+id);
        setTimeout(()=>{location.reload();}, 10);
    }
}