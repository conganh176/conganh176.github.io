$( function() {
    $( ".sorted-list" ).sortable({
      connectWith: ".sorted-list"
    });
  } );

// window.onload= function() {
// 	for (var i=0; i< $('.collection').length; i++) {
// 		$('h5')[i].append(" (" + $('.collection')[i].children.length + ")");
// 	}
// }

window.onload=function() {
	for (var i=0; i< $('.remove').length; i++) {
		document.getElementsByClassName("remove")[i].innerHTML="<i onclick=\"remove()\" title=\"Remove\" class=\"fas fa-eraser\"></i>";
	}
}


// window.setInterval(function() {
// 	for (var i=0; i< $('.collection').length; i++) {
// 		$('h5')[0].remove().append("TO DO (" + $('.collection')[i].children.length + ")");
// 		$('h5')[1].remove().append("DOING (" + $('.collection')[i].children.length + ")");
// 		$('h5')[2].remove().append("DONE (" + $('.collection')[i].children.length + ")");
// 	}
// }, 500);

window.setInterval(function() {
	for (var i=0; i< $('.header').length; i++) {
		document.getElementsByClassName("header")[i].innerHTML="";
	}
	document.getElementsByClassName("header")[0].innerHTML="<h5>TO DO (" + document.getElementsByClassName("collection")[0].querySelectorAll('a').length +")</h5>";
	document.getElementsByClassName("header")[1].innerHTML="<h5>DOING (" + document.getElementsByClassName("collection")[1].querySelectorAll('a').length +")</h5>";
	document.getElementsByClassName("header")[2].innerHTML="<h5>DONE (" + document.getElementsByClassName("collection")[2].querySelectorAll('a').length +")</h5>";
}, 0);
