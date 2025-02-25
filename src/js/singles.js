export const fetchSingles = async () => {
    try{
        const [artistRes, singlesRes] = await Promise.all([
            fetch('../../api/artists.json'),
            fetch('../../api/singles.json')
        ]);
        
        const artistData = await artistRes.json();
        const singlesData = await singlesRes.json();

        //Combine data
        const singlesWithArtists = singlesData.singles.map(single =>({ 
            ...single,
            artist: artistData.artists.find(artist => artist.id === single.artistId)
        }));

        renderSingles(singlesWithArtists);
    } catch(error){
        console.error('Error: ', error);
    }
};

export const renderSingles = (singles) => {
    const containerRow = document.querySelector('#singles-row');

    containerRow.innerHTML = singles.map(single => `
        <div class="row-item">
            <div class="img-content">
                <img class="row-img" src="${single.artist.urlImg}" alt="${single.name}"></img>
                <button class="play">
                    <img src="./src/assets/icons/play-solid.svg" alt="botão de play" class="play-icon">
                </button>
            </div>
            <div class="row-info">
                <span class="name text">${single.name}</span>
                <span class="artist-name text">${single.artist.name}</span>
            </div>
        </div>
    `).join('');
};