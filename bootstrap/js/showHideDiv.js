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
function showSchool(school) {
    document.getElementById(school).style.display = "none";
}

