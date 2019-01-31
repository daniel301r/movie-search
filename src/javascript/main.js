import * as view from './view';
import {elements} from './view';
import { Search, Movie, List} from './model';

// State controller
// 1. the search
// 2. the movie
// 3. the movie to watch list
const state = {};

// get the search results - this is the main controller for when the serach happens
const controlSearch = async () => {
    
    const query = view.getInput();
    
    if (query) {
        state.search = new Search(query);

        await state.search.getMovies();
        
        // insert HTML
        view.clearResults();
        state.search.results.Search.forEach(view.renderResults);
    }  
}
 

elements.searchBtn.addEventListener('click', e => {
    e.preventDefault();
    view.clearResults();
    controlSearch();
});

const controlMovie = async () => {

    const id = window.location.hash.replace('#', '');
    
    if(id) {
        
        state.movie = new Movie(id);

        try {
            await state.movie.getMovie();

            view.clearMovie();
            view.renderMovie(state.movie);            

        } catch (error) {
            alert('Problem with getting movie data...');
        }
    }   
}

window.addEventListener('hashchange', controlMovie); 

 
// to watch list

// movie list controller
const addToWatchList = () => {
    // create new movie list
    if (!state.list) state.list = new List();

    // add movie to list
    state.list.addMovie(state.movie.title)
    
    // render movie on to UI
    view.renderMovieToList(state.list.movies[state.list.movies.length - 1]);

}

elements.moviePage.addEventListener('click', function(e){
    if (e.target.matches('.btn_add_movie')) {
        addToWatchList();
    }
});

const deleteToWatchList = e => {
    // get id of movie on list
    const id = e.target.closest('li').dataset.itemnum;
    // remove it from movie list
    state.list.deleteMovie(id);
    // remove it from the UI
    view.deleteMovieList(id);
}

elements.movieToWatch.addEventListener('click', deleteToWatchList);
