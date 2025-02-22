/*SHADOW EFFECT*/
/*Toggles shadow on shadowDiv when scroll occurs on scrollableDiv*/
const shadowDiv = document.querySelector('.library__content');
const scrollableDiv = document.querySelector('.section__playlist');

export const initScrollShadow = () => {
    scrollableDiv.addEventListener('scroll', () => {
        shadowDiv.classList.toggle("scrolled", scrollableDiv.scrollTop > 0);
    });
}