
var navbar = document.getElementById("navbar-ul");
var navChildren = navbar.children;
var curDiv = null;

window.onload = function () {
    for (var i = 0; i < navChildren.length; i++) {
        var navbarChild = navbar.children[i];
        var writeHere = navbarChild.children[0].innerHTML;
        console.log(writeHere);
        addEventListener("click", writeHere + "-div");
    }
    console.log("\n" + navChildren[0]);
    navbarEvents(navChildren);
};

navChildren.onclick = function () {
    var link = navChildren.children.innerHTML + "-div";
    var linkedElem = document.getElementById(link);
    console.log(link);
    showDiv(link);
    changePageTitle()
};



function navbarEvents(liElems) {
    for (var i = 0; i < liElems.length; i++) {  
        var liElem = liElems[i].children;
        var elemToAddEventTo = liElem[0].innerHTML + "-div";
        var elemToPass = liElem[0].innerHTML + "-nav";
        console.log("element ToAddEventTo is " + elemToAddEventTo);
        console.log("element to pass " + elemToPass);
        var elemPass = document.getElementById(elemToPass);
        console.log("elemPass is " + elemPass);
        console.log(document.getElementById(elemToAddEventTo));
        console.log(document.getElementById(elemToPass));
        document.getElementById(elemToAddEventTo).addEventListener("click", document.getElementById(elemPass), false);
    }
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
