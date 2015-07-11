
var navbar = document.getElementById("navbar-ul");
var navChildren = navbar.children;
var curDiv = null;

window.onload = function () {
    navbarEvents(navChildren);
};

navChildren.onclick = function () {
    var link = navChildren.children.innerHTML + "-div";
    var linkedElem = document.getElementById(link);
    console.log(link);
    showDiv(link);
    changePageTitle(navChildren);
};



function navbarEvents(liElems) {
    for (var i = 0; i < liElems.length; i++) {
        var liElem = liElems[i].children;
        var elemToAddEventTo = liElem[0].innerHTML + "-div";
        var elemToPass = liElem[0].innerHTML + "-nav";
        console.log("element ToAddEventTo is " + elemToAddEventTo);
        console.log("element to pass " + elemToPass);
        var elemPass = document.getElementById(elemToPass);
        console.log(document.getElementById(elemToAddEventTo));
        console.log(document.getElementById(elemToPass));
        eventListenersAreAdded(elemToAddEventTo, elemToPass);
    }
}

function eventListenersAreAdded(elemToAddEventTo, elemToPass) {

    console.log("ADDING EVENT LISTENER");
    document.getElementById(elemToAddEventTo).addEventListener("click", function () {
        showDiv(elemToPass);
    }, false);
}
function showDiv(id) {
    //hide current div
    console.log("id is " + id);
    console.log("id's innerhtml is " + id.innerHTML);
    console.log("curDiv is " + curDiv);
    console.log("id element is " + document.getElementById(id));
    if (curDiv !== null) {
        document.getElementById(curDiv).style.display = "none";
    }

    document.getElementById(id).style.display = "inline";
    curDiv = id;
}

function changePageTitle(title) {
    console.log("in changePageTitle");
    var updatedTitle = title.split("-");
    console.log('updated title is ' + updatedTitle[0]);
    window.history.pushState({urlpath: 'www.tedxuniversityofwinnipeg.com/#' + updatedTitle[0]}, updatedTitle[0], updatedTitle[0]);

}
