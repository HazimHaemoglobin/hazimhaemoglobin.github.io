

window.onload = function () {
    var liElems = document.getElementById("navbar-ul").children;
    console.log(liElems);
    
    navbarEvents(liElems);
};

function navbarEvents(liElems) {
    for (var i = 0; i < liElems.length; i++) {

        console.log("liElems[" + i + "] is " + liElems[i]);
        var liElem = liElems[i].children;
        console.log(liElem);
        var elemToAddEventTo = liElem[i].innerHTML + "-div";
        var elemToPass = liElem[i].innerHTML + "-nav";
        console.log("element ToAddEventTo is " + elemToAddEventTo);
        console.log("element to pass " + elemToPass);
        var e = document.getElementById(elemToAddEventTo);
        var ex = document.getElementById(elemToPass);
        console.log(e);
        console.log(ex);
        document.addEventListener("click", ex, false);
        showDiv(elemToAddEventTo);
    }
}


var curDiv;

function showDiv(id) {
    //hide current div
    console.log(id);
    console.log(curDiv);
    console.log(document.getElementById(id));
    if (curDiv !== null || curDiv !== undefined) {
        document.getElementById(curDiv).style.display = "none";
    }

    document.getElementById(id).style.display = "inline";
    curDiv = id;
    changePageTitle(id);
}


function changePageTitle(title) {
    var updatedTitle = title.split("-");
    console.log('updated title is ' + updatedTitle[0]);
    window.History.pushState({urlpath: 'www.tedxuniversityofwinnipeg.com/' + updatedTitle[0]});

}