import { initSearch } from './search.js'; 
import { initScrollShadow } from './scroll-effects.js'; 
import { fetchArtists } from './artists.js';
import { fetchSingles } from './singles.js';

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initScrollShadow();
  fetchArtists();
  fetchSingles();
});