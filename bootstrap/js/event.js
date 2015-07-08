

window.onload = function () {
    var liElems = document.getElementById("navbar-ul").child;
    navbarEvents(liElems);
    showDiv();
    changePageTitle();
};

function navbarEvents() {
    console.log("liElems is" + liElems);
    for (var i = 0; i < liElems; i++) {
        var divToAddEventTo = document.getElementById(liElems[i].innerHTML) + "-div";
        console.log("divToAddEventTo is " + divToAddEventTo);
        document.addEventListener("click", divToAddEventTo, false);
        showDiv(divToAddEventTo);
    }
}


var curDiv;

function showDiv(id) {
    //hide current div
    if (curDiv !== null) {
        document.getElementById(curDiv).style.display = "none";
    }

    document.getElementById(id).style.display = "inline";
    curDiv = id;
    changePageTitle(id);
}


function changePageTitle(title) {
    var updatedTitle = title.split("-");
    console.log('updated title is ' + updatedTitle)
    window.History.pushState({urlpath:'www.tedxuniversityofwinnipeg.com/' + updatedTitle[0]});

}