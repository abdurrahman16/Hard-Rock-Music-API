const searchSongs =() =>{
    const searchText = document.getElementById('search-filed').value;
    const url =`https://api.lyrics.ovh/suggest/${searchText}`

    fetch (url)
    .then (res => res.json())
    .then (data => disPlaySong(data.data))

    const disPlaySong = songs => {
        const songContainer = document.getElementById('song-container');
        songs.forEach(song => {

const songDiv = document.createElement('div');
songDiv.className ='single-result row align-items-center my-3 p-3';

songDiv.innerHTML = `
<div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                        <source src="${song.preview}" type="audio/ogg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyric('${song.artist.name}','${song.title}');" class="btn btn-success">Get Lyrics</button>
                    </div>

`;
songContainer.appendChild(songDiv);

        })
    }
}




function getLyric( artist,title){
console.log(artist,title);
}