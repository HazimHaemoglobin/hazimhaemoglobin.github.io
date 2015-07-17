'use strict';

(function (w, d) {

    var prevId;
    var home = "#home";
    var homeURL = "http://hazimhaemoglobin.github.io/" + home;
    var id = w.location.hash;
    idHash=$(id);
    

    var handler = function (event) {

        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
//        if (event.oldURL)


        if (id === home) {
            $(home).fadeTo(400, .1);
        } else {
            console.log('ayy');
            $('.tedx-logo').hide();
            $(id).fadeIn(400);
            $(home).fadeTo(400, .1);
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
