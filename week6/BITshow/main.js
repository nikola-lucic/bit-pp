
/*

data model

tw shows
show
cast 
season

objects
---------------------------------------------------------------
tv show

name /string
image/string
id/integer number
seasons/array of strings
casts/array of cast 
details/string



seasons

start data
end data

casts

name
surname


tw shows

shows /array of number
limit number

----------------------------------------------------------------------

ui model

eventi
//
on load strane
klik na show
search box changes
klik on search list item

objekti

display shows
display show
show search list



*/
/*
//properties of Show object
//------------------------------------------------------------------------

let showName = [];
let showPoster = [];
let showId = [];
let seasons = [];
let castList = [];
let showDetails = [];

//properties of Shows object
//------------------------------------------------------------------------
let showsList = [];
let LimitNumberOfShows = 50;

//properties of Season object
//------------------------------------------------------------------------

let showStartDate = new Data();
let showEndDate = new Data();

//properties of Cast object
//------------------------------------------------------------------------

let nameOfCast = [];
*/
let main = (function (dataModule, uiModule) {
    //init
    let init = function () {

        let tvMazeApi = 'http://api.tvmaze.com/shows';
        var request = $.ajax({
            url: 'http://api.tvmaze.com/shows',
            method: "GET",
        });
        request.done(function (response) {
            const myShows = dataModule.adaptTvShows(response)

            uiModule.displayTVShows(myShows)
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    }
    return {
        init: init
    }




})(dataModule, uiModule);
main.init()

