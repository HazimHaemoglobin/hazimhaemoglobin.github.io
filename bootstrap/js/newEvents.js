/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function (w, d) {
    console.log("START FUNCTION");
    var allElements = d.getElementsByTagName("*");
    console.log(allElements);
    var allIds = [];
    console.log(allIds);
    for (var i = 0, n = allElements.length; i < n; ++i) {
        var el = allElements[i];
        if (el.id) {
            allIds.push(el.id);
        }
    }
    console.log(allIds);

    oldHash = w.location.hash;
    console.log(oldHash);

    w.onhashchange = function () {
        console.log("INSIDE ONHASHCHANGE METHOD");
        if (oldHash === w.location.hash)
            return;

        allIds.forEach(function (id) {
            id = "#" + id;
            console.log(id);
            if (id === w.location.hash) {
                $(".content div:not(.hidden)").fadeOut(400, function () {
                    $(".content div:not(.hidden)").addClass("hidden");
                    $(id).fadeIn(400, function () {
                        $(id).removeClass("hidden");

                    });
                });
            }
        });

        oldHash = w.location.hash;
    };
}(this, this.document));