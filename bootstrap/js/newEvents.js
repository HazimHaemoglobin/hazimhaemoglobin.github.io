/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function (w, d) {
    var allElements = document.getElementsByTagName("*");
    var allIds = [];
    for (var i = 0, n = allElements.length; i < n; ++i) {
        var el = allElements[i];
        if (el.id) {
            allIds.push(el.id);
        }
    }

    oldHash = window.location.hash;

    window.onhashchange = function () {

        if (oldHash === window.location.hash)
            return;

        allIds.forEach(function (id) {
            id = "#" + id;
            if (id === window.location.hash) {
                $(".content div:not(.hidden)").fadeOut(400, function () {
                    $(".content div:not(.hidden)").addClass("hidden");
                    $(id).fadeIn(400, function () {
                        $(id).removeClass("hidden");

                    });
                });
            }
        });

        oldHash = window.location.hash;
    };
}(this, this.document));