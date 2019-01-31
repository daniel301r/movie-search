export const elements = {
    searchInput: document.querySelector('.search__field'),
    searchBtn: document.querySelector('.btn__search'),
    searchResList: document.querySelector('.moviesResults'),
    moviePage: document.querySelector('.movie'),
    movieToWatch: document.querySelector('.toWatchList'),
};

// Get/clear search input
export const getInput = () => elements.searchInput.value;

export const clearInput = () => { 
    elements.searchInput.value = '';
};

export const clearResults = () => {
	elements.searchResList.innerHTML = '';
	elements.moviePage.innerHTML = '';
};

export const clearMovie = () => {
    elements.moviePage.innerHTML = '';
};

// get the search results on the page
export const renderResults = movie => {
    const markup = `
    <li>
        <a class="results__link" href="#${movie.imdbID}"> <!-- you get an image, title and year -->
            <img src="${movie.Poster}" >   
            <div class="results__data">
                <h4 class="results__name">${movie.Title}</h4>
                <p class="results__info">${movie.Year}</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}; 

// display the selected movie
export const renderMovie = movie => {
    const markup = `
    <h1 class="movieTitle">${movie.title}</h1>
    <div class="mainInfo">
        <img src="${movie.img}">
        <h4 class="categories">Genre: <span class="genre">${movie.genre}</span></h4>
        <h4 class="categories">Director: <span class="director">${movie.director}</span></h4>
        <h4 class="categories">Released: <span class="released">${movie.released}</span></h4>
    </div>
    <div class="extraInfo">
        <h4 class="categories">Plot: <span class="plot">${movie.plot}</span></h4>
        <h4 class="categories">Actors: <span class="actors">${movie.actors}</span></h4>
        <h4 class="categories">Awards: <span class="awards">${movie.awards}</span></h4>
        <h4 class="categories">Runtime: <span class="runtime">${movie.runtime}</span></h4>
    </div>
    <button class="btn_add_movie">Add to watch list</button>
    `;
    elements.moviePage.insertAdjacentHTML('afterbegin', markup);
}



// use the HTML markup to add our movie to the To Watch list
export const renderMovieToList = (movie) => {
    const markup = `
        <li data-itemNum=${movie.num}>
            <h4>${movie.name}</h4>
            <button class="movieListDelete">Remove...<i class="far fa-times-circle"></i></button>
        </li>
    `;
    elements.movieToWatch.insertAdjacentHTML('afterbegin', markup); 
}

// delete movie from to watch list

export const deleteMovieList = id => {
    const item = document.querySelector(`[data-itemnum="${id}"]`);
    item.parentElement.removeChild(item);
} 
