const searchHeaderDiv = document.querySelector('.header__search');
const searchInput = document.querySelector('#search-input');

export const initBorderEffect = () => {
    searchInput.addEventListener('focus',()=>{
        searchHeaderDiv.classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
        searchHeaderDiv.classList.remove('focused');
    });
};