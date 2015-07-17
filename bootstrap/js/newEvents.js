'use strict';

(function (w, d) {

    var prevId;
    var homeURL = "http://hazimhaemoglobin.github.io/#home";
    var handler = function (event) {
        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;
        if (event.oldURL)
            var id = w.location.hash;

        if (event.newURL === homeURL) {
            fadeTo(event, id);
        } else {
            console.log('ayy');
//            $('.tedx-logo').hide();
            $(id).fadeIn(400);
//            $('.body-background-image').fadeTo(1, .1);
        }
        console.log("id is ", id);

        if (prevId) {
            $(prevId).fadeOut(400);
        }
        prevId = id;
    };

    var fadeTo = function (event, id) {
        console.log("swag");
//        $('.tedx-logo').show();
//        $('.body-background-image').fadeIn(400); 
    };



    w.addEventListener("hashchange", handler, false);


    $('.nav-content-hidden').hide();

   

}(this, this.document));
