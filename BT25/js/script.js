$( function() {
    $( ".sorted-list" ).sortable({
      connectWith: ".sorted-list"
    });
  } );

function count() {
	for (var i=0; i< $('.collection').length; i++) {
		$('h5')[i].append(" (" + $('.collection')[i].children.length + ")");
	}
}

window.onload= function() {
	count();
}