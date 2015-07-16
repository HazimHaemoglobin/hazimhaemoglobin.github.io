'use strict';

(function (w, d) {

    var prevId;
    var homeURL = "http://hazimhaemoglobin.github.io/#home";
    var handler = function (event) {
        $('.tedx-logo').hide();
        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
        if (event.oldURL)
            var id = w.location.hash;

        if (event.newURL !== homeURL) {
            $(id).fadeIn(400);
        }
        console.log("id is ", id);

        if (prevId) {
            $(prevId).fadeOut(400);
        }
        prevId = id;
    };

    var fadeTo = function () {

    };



    w.addEventListener("hashchange", handler, false);


    $('.nav-content-hidden').hide();

    console.log(event.newURL);

}(this, this.document));
