
var navbar = document.getElementById("navbar-ul");
var navChildren = navbar.children;
var curDiv = null;

window.onload = function () {
    console.log("\n" + navChildren);
    navbarEvents(navChildren);


    for (var i = 0; i < navChildren.length; i++) {
        var navbarChild = navbar.children[i];
        var writeHere = navbarChild.children[0].innerHTML;
        addEventListener("click", writeHere + "-div");
    }





  

    function navbarEvents(liElems) {
        for (var i = 0; i < liElems.length; i++) {

            console.log("\nliElems[" + i + "] is " + liElems[i]);
            var liElem = liElems[i].children;
            console.log("\n" + liElem);

            var elemToAddEventTo = liElem[0].innerHTML + "-div";
            console.log("\nelement ToAddEventTo is " + elemToAddEventTo);

            var elemToPass = liElem[0].innerHTML + "-nav";
            console.log("\nelement to pass " + elemToPass);

            var e = document.getElementById(elemToAddEventTo);
            console.log("\n" + e);
            var ex = document.getElementById(elemToPass);
            console.log("\n" + ex);
            document.addEventListener("click", ex, false);
            showDiv(elemToAddEventTo);
        }
    }



    function showDiv(id) {
        //hide current div
        console.log(id);
        console.log(curDiv);
        console.log(document.getElementById(id));
        if (curDiv !== null) {
            document.getElementById(curDiv).style.display = "none";
        }

        document.getElementById(id).style.display = "inline";
        curDiv = id;
        changePageTitle(id);
    }


    function changePageTitle(title) {
        console.log("in changePageTitle");
        var updatedTitle = title.split("-");
        console.log('updated title is ' + updatedTitle[0]);
        window.history.pushState({urlpath: 'www.tedxuniversityofwinnipeg.com/' + updatedTitle[0]}, updatedTitle, updatedTitle);

    }

};

  navChildren.onclick = function (e) {
        var link = navChildren.children.innerHTML + "-div";
        var linkedElem = document.getElementById(link);
        showDiv(link);
    };