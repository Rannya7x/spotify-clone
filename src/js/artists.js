export const fetchArtists = async () => {
    try{
        const response = await fetch('../../api/artists.json');
        const data = await response.json();
        renderArtists(data.artists);
    } catch (error) {
        console.error('Error: ', error);
    }
};

export const renderArtists = (artists) => {
    const containerRow = document.querySelector('#artists-row');
    containerRow.innerHTML = '';

    artists.forEach(artist => {
        const artistHTML = `
            <div class="row-item">
                <div class="img-content">
                    <img class="row-img" src="${artist.urlImg}" alt="${artist.name}">
                    <button class="play">
                        <img src="./src/assets/icons/play-solid.svg" alt="botão de play" class="play-icon">
                    </button>
                </div>
                <div class="row-info">
                    <span class="text name">${artist.name}</span>
                    <span class="text category">${artist.genre}</span>
                </div>
            </div>
        `;

        containerRow.insertAdjacentHTML('beforeend', artistHTML);
    });
};