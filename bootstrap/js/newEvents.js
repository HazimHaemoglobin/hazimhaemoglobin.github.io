'use strict';

(function (w, d) {

    var prevId;
    var homeURL = "http://hazimhaemoglobin.github.io/#home";
    var handler = function (event) {
        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
//        if (event.oldURL)
            var id = w.location.hash;

        if (event.newURL === homeURL) {
        console.log("swag");
        $('.tedx-logo').show();
            $(id).fadeIn(400);
        $('.body-background-image').fadeIn(400); 
        } else {
            console.log('ayy');
            $('.tedx-logo').hide();
            $(id).fadeIn(400);
            $('.body-background-image').fadeTo(400, .1);
        }
        console.log("id is ", id);

        if (prevId) {
            $(prevId).fadeOut(400);
        }
        prevId = id;
    };

    var fadeTo = function (event, id) {
    };



    w.addEventListener("hashchange", handler, false);


    $('.nav-content-hidden').hide();

   

}(this, this.document));
