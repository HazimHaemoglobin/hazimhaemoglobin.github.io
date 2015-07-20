'use strict';

(function (w, d) {

    var prevId;
    var home = "#home";
    var id;
    var homeURL = "http://hazimhaemoglobin.github.io/" + home;

    var handler = function (event) {

        id = w.location.hash;
        console.log("id", id);
        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
//        if (event.oldURL)


        if (id === home) {
            console.log('hi');
            $('.body-background-image').fadeIn(400);
            $('.tedx-logo').fadeIn(400);
            $('.body-background-image').css({opacity: 1.0});
            $('.tedx-logo').fadeIn(400);
        } else {
            //$('.body-background-image').css({opacity: 0.2});
            $('.body-background-image').fadeOut(400);
            $('.tedx-logo').fadeOut(400);
            $(id).fadeIn(400);
        }
        console.log("id is ", id);

        if (prevId) {
            $(prevId).fadeOut(400);
        }
        prevId = id;
    };




    w.addEventListener("hashchange", handler, false);


    $('.nav-content-hidden').hide();



}(this, this.document));
