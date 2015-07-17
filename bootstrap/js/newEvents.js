'use strict';

(function (w, d) {

    var prevId;
    var homeHash = "#home";
    var homeURL = "http://hazimhaemoglobin.github.io/" + homeHash;
    var id;
    var tedxlogo = ".tedx-logo";
    var handler = function (event) {

        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
//        if (event.oldURL)

        id = w.location.hash;

        if (id === homeHash) {
            console.log("swag");
            $(tedxlogo).show();
            $(id).fadeIn(400);
            $(homeHash).fadeIn(400);
        } else {
            console.log('ayy');
            $(tedxlogo).hide();
            $(id).fadeIn(400);
            $(homeHash).fadeTo(400, .1);
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
