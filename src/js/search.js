const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('search-result');
const resultPlaylist = document.getElementById('result-playlists');
const mainContent = document.getElementById('main-container');
const playlistContainer = document.getElementById('playlist-container');

/*DATA MODEL*/
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            displayResults(result);
        })
        .catch(err => console.log(err));
}

/*CONTROLLER*/
export const initSearch = () => {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            resultArtist.classList.add('hidden');
            resultPlaylist.classList.remove('hidden');
            return;
        };

        requestApi(searchTerm);
    });
};

/*VIEW*/
function displayResults(result) {
    mainContent.classList.add('hidden');
    resultPlaylist.classList.add('hidden');
    playlistContainer.classList.remove('hidden');


    /*const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');*/

    resultArtist.innerHTML = '';

    result.forEach(artist => {
        const resultHTML = `
            <div class="artist-card" id="">
                        <div class="card-img">
                            <img src="${artist.urlImg}" alt="" id="artist-img" class="artist-img"></img>
                            <div class="play">
                                <span class="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div class="card-text">
                            <a title="${artist.name}" class="vst" href="/">${artist.name}</a>                       
                            <span class="artist-name" id="artist-name"></span>
                            <span class="artist-category">${artist.genre}</span>
                        </div>
                    </div>
        `;

        resultArtist.insertAdjacentHTML('beforeend', resultHTML);
    });
    resultArtist.classList.remove('hidden'); 
}