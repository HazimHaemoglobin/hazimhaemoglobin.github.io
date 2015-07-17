'use strict';

(function (w, d) {

    var prevId;
    var home = "#home";
    var homeURL = "http://hazimhaemoglobin.github.io/" + home;
    var homeHash= $(home);
    var id;
    var tedxlogo = $(".tedx-logo");
    var id = $(w.location.hash);

    var handler = function (event) {

        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
//        if (event.oldURL)


        if (id === homeHash) {
            homeHash.fadeTo(400, .1);
        } else {
            console.log('ayy');
            tedxlogo.hide();
            id.fadeIn(400);
            homeHash.fadeTo(400, .1);
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
