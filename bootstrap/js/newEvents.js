'use strict';

(function (w, d) {

    var prevId;
    console.log("previd", prevId);
    var home = "#home";
    console.log("home", home);
    var homeURL = "http://hazimhaemoglobin.github.io/" + home;
    console.log("homeurl", homeURL);


    var handler = function (event) {

        var id = w.location.hash;
        console.log("id", id);
        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
//        if (event.oldURL)


        if (id === home) {
            console.log("lmao");
           $('.body-background-image').css({opacity:1.0});
            $('.tedx-logo').fadeIn(400);
        } else {
            console.log('ayy');
//            $('.body-background-image').css({opacity:0.1});
            $('.tedx-logo').fadeOut();
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
