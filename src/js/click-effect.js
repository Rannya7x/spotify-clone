const searchHeaderDiv = document.querySelector('.header__search');
const searchInput = document.querySelector('#search-input');

export const initBorderEffect = () => {
    searchInput.addEventListener('click',(e)=>{
        e.preventDefault();
        searchHeaderDiv.focus();
    });
};