var app = {
	newJob: function(e, type, input) {
		var jobName = $(input).val();

		var event = window.event || e;

		if (event.keyCode === 13 && jobName.trim() !== '') {
			this.addJobToList(type, jobName);
			$(input).val('');
		}
	},
	addJobToList: function (type, jobName) {
		var item = '<div href="#!" class="collection-item" onmouseover="appear(this)" onmouseout="disappear(this)">'+ jobName + '<span class="remove"><i onclick="app.deleteJob(this)" title="Remove" class="fas fa-eraser" style="opacity: 0;"></i></span></div>';

		$('#' + type).append(item);
	},
	deleteJob: function (span) {
		var modal = $('#modal-confirm');
		var item = $(span).parent().parent();
			
		modal.modal();
		modal.modal('open');

		$('#btn-delete').on('click', function() {
			item.css("opacity", "0");
			item.css("transition", "opacity 0.5s ease-in-out");
			modal.modal('close');
			setTimeout(function() {
			item.remove();
			}, 500);
		});

	}

}

function plus(z) {
	// var item = '<div href="#!" class="collection-item" onmouseover="appear(this)" onmouseout="disappear(this)">'+ z.parent().val() + '<span class="remove"><i onclick="app.deleteJob(this)" title="Remove" class="fas fa-eraser" style="opacity: 0;"></i></span></div>';
	item=z.parentElement.querySelector('input').value;
	if (item.trim() !== '') {
		z.parentElement.parentElement.querySelector('.collection').innerHTML+='<div href="#!" class="collection-item" onmouseover="appear(this)" onmouseout="disappear(this)">'+ item + '<span class="remove"><i onclick="app.deleteJob(this)" title="Remove" class="fas fa-eraser" style="opacity: 0;"></i></span></div>';
		z.parentElement.querySelector('input').value="";
	}
}

$( function() {
    $( '.sorted-list' ).sortable({
      connectWith: '.sorted-list',
      placeholder: 'ui-state-highlight',
      start: function (event, ui) {
      	$(ui.item[0]).addClass('dragging');
      },
      stop: function (event, ui) {
      	$(ui.item[0]).removeClass('dragging');
      }
    });
  } );

// window.onload= function() {
// 	for (var i=0; i< $('.collection').length; i++) {
// 		$('h5')[i].append(" (" + $('.collection')[i].children.length + ")");
// 	}
// }

window.onload=function() {
	for (var i=0; i< $('.remove').length; i++) {
		document.getElementsByClassName("remove")[i].innerHTML="<i onclick=\"app.deleteJob(this)\" title=\"Remove\" class=\"fas fa-eraser\"></i>";
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
	// for (var i=0; i< $('.header').length; i++) {
	// 	document.getElementsByClassName("header")[i].innerHTML="";
	// }
	document.getElementsByClassName("header")[0].innerHTML="<h5>TO DO (" + document.getElementsByClassName("collection")[0].children.length +")</h5>";
	document.getElementsByClassName("header")[1].innerHTML="<h5>DOING (" + document.getElementsByClassName("collection")[1].children.length +")</h5>";
	document.getElementsByClassName("header")[2].innerHTML="<h5>DONE (" + document.getElementsByClassName("collection")[2].children.length +")</h5>";
}, 0);

// function appear() {
// 	for (var i=0; i<$('.collection-item').length; i++) {

// 	}
// }

function appear(x) {
	x.querySelector(".fas").style.opacity="1";
}

function disappear(y) {
	y.querySelector(".fas").style.opacity="0"
}