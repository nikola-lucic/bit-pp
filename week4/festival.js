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
        this.length = length;
        this.getData = function () {
            var movieString = this.title + ' ' + this.movieLength + ' ' + this.genre;
            return movieString;
        };
    };

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumberOfMovies = function () {
            return this.listOfMovies.length;
        };
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        };
        this.sumOfMovieLength = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                sum += this.listOfMovies[i].length;
            }
            return sum;
        };
        this.getData = function () {
            var programData = "";
            for (var i = 0; i < this.listOfMovies.length; i++) {
                programData += this.listOfMovies[i].getData();

            }
            return programData;
        };

    };

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.listOfMoviesInPrograms = 0;
    };

    //lenght of movie

    var genreName = new Genre("Science Fiction");
    var robot = new Movie("I Robot", genreName, '130');
    //movieName = movieName.getData();
    //console.log(movieName); //vraca getData u stringu

    var movieProgram = new Program('3. 11.2018');
    movieProgram.addMovie(robot);
    movieProgram.totalNumberOfMovies();

    var festivalName = new Festival('Fest');
    console.log(movieProgram);





})();







// function Intro(Genre, Movie, Program, Festival) {
            //     this.Genre = name;
            //     this.Movie = {
            //         title = "hello",

            //     }
            //     this.Program = Program{}