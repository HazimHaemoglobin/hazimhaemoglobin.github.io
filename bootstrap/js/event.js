
var navbar = document.getElementById("navbar-ul");
var navChildren = navbar.children;
var curDiv = null;

window.onload = function () {
    navbarEvents(navChildren);
    console.log(navChildren);
    changePageTitle(navChildren.split("-"));
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
    console.log("ENTERING EVENTLISTERSAREADDED");
    console.log("elem to add event to is " + elemToAddEventTo);
    console.log("elem to pass is " + elemToPass);
    console.log("ADDING EVENT LISTENER");
    document.getElementById(elemToAddEventTo).addEventListener("click", function () {
        showDiv(elemToPass);
    }, false);
    console.log("LEAVING EVENTLISTENERSAREADDED");
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
    console.log('updated title is ' + title[0]);
    window.history.pushState({urlpath: 'www.tedxuniversityofwinnipeg.com/#' + title[0]}, title[0], title[0]);

}

(function(w,d){
	var allElements = document.getElementsByTagName("*");
	var allIds = [];
	for (var i = 0, n = allElements.length; i < n; ++i) {
		var el = allElements[i];
		if (el.id) { allIds.push(el.id); }
	}

	oldHash = window.location.hash;

	window.onhashchange = function() {

		if (oldHash === window.location.hash)
			return;

		allIds.forEach(function(id) {
			id = "#" + id;
			if (id === window.location.hash) {
				$(".content div:not(.hidden)").fadeOut(400, function() {
					$(".content div:not(.hidden)").addClass("hidden");
					$(id).fadeIn(400, function() {
						$(id).removeClass("hidden");

					});
				})
			}
		});

		oldHash = window.location.hash;
	};
}(this,this.document));