'use strict';

(function (w, d) {

    var prevId;
    var handler = function (event) {
        $('.tedx-logo').hide();
        console.log('event', event);

        if (event.oldURL === event.newURL)
            return;

        var id = w.location.hash;

        $(id).fadeIn(400);
        console.log("id is ", id);

        if (prevId) {
            $(prevId).fadeOut(400);
        }
        prevId = id;
        if (event.newUrl.contains("home")) {
            $('.tedx-logo').fadeIn();
        }
    };

    var fadeTo = function () {
        
    };



    w.addEventListener("hashchange", handler, false);


    $('.nav-content-hidden').hide();

    console.log(event.newURL);

}(this, this.document));
