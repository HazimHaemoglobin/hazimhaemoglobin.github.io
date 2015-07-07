

window.onload = function () {
    var liElems = document.getElementById("navbar-ul").child;

    for (var i = 0; i < liElems; i++) {
        var divToAddEventTo =  document.getElementById(liElems[i].innerHTML) + "-div";
        document.addEventListener("click", divToAddEventTo, false);
        showDiv(divToAddEventTo);
    }
};