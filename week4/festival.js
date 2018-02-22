'use strict';

(function () {
    console.log('HI');

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var nameSlicer = this.name[0] + this.name[this.name.length - 1];
            return nameSlicer.toUpperCase();
        };
    };

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre.getData();
        this.movieLength = length;
        this.getData = function () {
            var movieString = this.title + ' ' + this.movieLength + ' ' + this.genre;
            return movieString;
        };
    };

    function Program(date, listOfMovies, TotalNumberOfMovies) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumberOfMovies = totalNumberOfMovies;
    };

    function Festival(name, /*ListOfPrograms,*/numberOfMoviesInAllPrograms) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMoviesInAllPrograms = numberOfMoviesInAllPrograms;
    };

    //lenght of movie

    var genreName = new Genre("Science Fiction");
    var movieName = new Movie("I Robot", genreName, '1:30');
    movieName = movieName.getData();
    console.log(movieName); //vraca getData u stringu




})();







// function Intro(Genre, Movie, Program, Festival) {
            //     this.Genre = name;
            //     this.Movie = {
            //         title = "hello",

            //     }
            //     this.Program = Program{}