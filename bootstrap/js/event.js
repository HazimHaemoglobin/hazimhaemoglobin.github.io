

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
        console.log(liElem[0]);
        console.log(liElem[0].innerHTML);
        var elemToAddEventTo = liElem.innerHTML + "-div";
        console.log("element ToAddEventTo is " + elemToAddEventTo);
        document.addEventListener("click", elemToAddEventTo, false);
        showDiv(elemToAddEventTo);
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
    console.log('updated title is ' + updatedTitle[0]);
    window.History.pushState({urlpath: 'www.tedxuniversityofwinnipeg.com/' + updatedTitle[0]});

}