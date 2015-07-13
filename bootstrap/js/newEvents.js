'use strict';

(function (w, d) {

    var prevId;
    var handler = function(event){
        console.log('event', event);

        if(event.oldURL === event.newURL) return;

        var id = w.location.hash;

        $('#id').fadeIn(400);

        if(prevId){
            $('#prevId').fadeOut(400);
        }

        prevId = id;
    };

    w.addEventListener("hashchange", handler, false);

    $('.nav-content-hidden').hide();

}(this, this.document));
