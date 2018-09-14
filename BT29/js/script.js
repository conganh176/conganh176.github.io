var COLUMN_TYPE = ['todo','doing','done'];

var DB = {
	getData: function () {
		if (typeof(Storage) !== "undefined") {
			var data;
			try {
				data = JSON.parse(localStorage.getItem('list')) || {};

			} catch (error) {
				data = {};
			}

			return data;

		} else {
			alert("Sorry! No Web Storage support..");
			return {};

		}
	},
	setData: function (data) {
		 localStorage.setItem('list', JSON.stringify(data));
	}
}

var list = DB.getData();
// list = {todo: "", doing: "", done: ""};

var app = {
	newJob: function(e, type, input) {
		var jobName = $(input).val();

		var event = window.event || e;

		if (event.keyCode === 13 && jobName.trim() !== '') {
			if (!list[type]) list[type] = [];
			list[type].push(jobName);
			DB.setData(list);
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
		var btn = $('#btn-delete');
		var item = $(span).parent().parent();
			
		modal.modal();
		modal.modal('open');


		btn.off('click')

		btn.on('click', function() {
			var columnType = item.parent().attr('id');
			var itemPosition = $('#' + columnType + ' .collection-item').index(item);

			list[columnType].splice(itemPosition, 1);
			DB.setData(list);


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
		list[z.parentElement.parentElement.querySelector(".collection").id].push(item);
		DB.setData(list);
		z.parentElement.parentElement.querySelector('.collection').innerHTML+='<div href="#!" class="collection-item" onmouseover="appear(this)" onmouseout="disappear(this)">'+ item + '<span class="remove"><i onclick="app.deleteJob(this)" title="Remove" class="fas fa-eraser" style="opacity: 0;"></i></span></div>';
		z.parentElement.querySelector('input').value="";
		console.log();
	}
}

$( function() {
	COLUMN_TYPE.forEach(function(type) {
		var columnType = list[type] || [];
		columnType.forEach(function(jobName) {
			app.addJobToList(type, jobName);
		})
	});

	// var doing = list['doing'] || [];

	// doing.forEach(function(job) {
	// 	app.addJobToList('doing', job);
	// });

    $( '.sorted-list' ).sortable({
      connectWith: '.sorted-list',
      placeholder: 'ui-state-highlight',
      start: function (event, ui) {
      	$(ui.item[0]).addClass('dragging');

      	// ui.item.oldColumnType = ui.item.context.parentElement.getAttribute('id');
      	// ui.item.oldItemPosition = ui.item.index();
      },
      stop: function (event, ui) {
      	$(ui.item[0]).removeClass('dragging');

      	// var item=ui.item;
      	// var oldColumnType = item.oldColumnType;
      	// var oldItemPosition = item.oldItemPosition;
      	// var newColumnType = item.context.parentElement.getAttribute('id');
      	// var newItemPosition = item.index();

      	// list[oldColumnType].splice(oldItemPosition, 1);

      	// list[newColumnType].splice(newItemPosition, 0, item[0].innerText);

      	// DB.setData(list);

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