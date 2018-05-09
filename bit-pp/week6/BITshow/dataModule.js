'use strict'
let dataModule = (function () {
    //creating of TvShow object class
    //------------------------------------------------------------------------
    class SingleTvShow {
        constructor(name, image, id, seasons = [], cast = [], details) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = seasons;
            this.cast = cast;
            this.details = details;
        }
    };

    //creating of TvShow object class
    //------------------------------------------------------------------------
    class TvShow {
        constructor(name, url, id) {
            this.name = name;
            this.url = url;
            this.id = id;
        }
    }

    const adaptTvShows = function (tvShows) {
        const shows = tvShows.slice(0, 51);

        return shows.map((show) => {
            return new TvShow(show.name, show.image.medium, show.id);
        })
    }
    //creating of TvShow object class
    //------------------------------------------------------------------------
    class Season {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    };
    //creating of TvShow object class
    //------------------------------------------------------------------------
    class Cast {
        constructor(name) {
            this.name = name;
        }
    };

    return {
        adaptTvShows
    }
})();