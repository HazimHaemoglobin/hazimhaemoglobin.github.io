

window.onload = function () {
    var liElems = document.getElementById("navbar-ul").child

    for (var i = 0; i < liElems; i++) {
        document.addEventListener("click", document.getElementById(liElems[i] + "-div") , false);
    }
};