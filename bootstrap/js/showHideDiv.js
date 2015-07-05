/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var curDiv;

function showDiv(id) {
    //hide current div
    if (curDiv !== null) {
        document.getElementById(curDiv).style.display = "none";
    }
    document.getElementById(id).style.display = "inline";
    curDiv = id;
}


function changePageTitle(title) {
    var updatedTitle = title.split("-");
    window.location.hash = "http://www.tedxuniversityofwinnipeg.com/" + updatedTitle[0];
}
