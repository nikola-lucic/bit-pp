'use strict';

let uiModule= (() => {
    const displayTVShows = (tvShows) => {
        let cardDeck = $('<div class="card-deck"></div');

        tvShows.forEach(show => {
                let card = `<div class="col-12 col-md-6 col-lg-4" id=${show.id}>
                <div class="card">
                <img class="card-img-top" src="${show.url}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${show.name}</h5>
                </div>
                </div>
                </div>`
                $(cardDeck).append(card);
        });

        $('#shows-preview').append(cardDeck);
        };

    return {
        displayTVShows
    }
})();


