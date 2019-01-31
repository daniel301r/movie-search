// create search class
export class Search {
    constructor(query) {
        this.query = query;
    }
    async getMovies () {
        try {
            const result = await fetch(`http://www.omdbapi.com/?apikey=${key2}&s=${this.query}`);
            const data = await result.json();
            this.results = data;
        } catch(error) {
            console.log(error);
        }
    }
}

// create selected Movie class

const key = 'a6b2398e';
const key2 = 'd41cc4ca'; 

export class Movie {
    constructor(id) {
        this.id = id;
    }
    async getMovie () {
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${this.id}`);
            const data = await res.json();
            
            this.img = data.Poster;
            this.title = data.Title;
            this.genre = data.Genre;
            this.director = data.Director;
            this.released = data.Released;
            this.plot = data.Plot;
            this.actors = data.Actors;
            this.awards = data.Awards;
            this.runtime = data.Runtime;
        } catch (error) {
            alert('Problem with creating movie object....');
        }
    }
}


// --------- I initially added this as a method to the List class but when I called it in the 
// --------- addMovie method it said that it was undefined - how do I include it in the class?

const setNumber = (array) => {
    let num = 0;
    if(array.length > 0) {
        num = array[array.length - 1].num + 1;
    }
    return num;
}


export class List{
    constructor() {
        this.movies = [];
    }

    // createNUM() {
    //     let num = 0;
    //     if (this.movies.length > 0) {
    //         num = this.movies[this.movies.length - 1].num + 1;
    //     }
    // }

    addMovie(name) {
        const movie = {
            name,
            num: setNumber(this.movies)
        }
        this.movies.push(movie)
        return movie;
    }

    deleteMovie(num) {
        const index = this.movies.findIndex(el => el.num === num);
        this.movies.splice(index, 1);
    }
}

