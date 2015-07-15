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
    };

    w.addEventListener("hashchange", function () {
        $('.body-background-image').fadeTo(1, 0.5,
                handler);
    }, false);

    $('.nav-content-hidden').hide();
    if (event.newUrl.contains("home")) {
        $('.tedx-logo').fadeIn();
    }

}(this, this.document));
