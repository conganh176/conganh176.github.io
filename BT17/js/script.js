var front = ["<img src='img/front1.png' alt='front1'>", 
			"<img src='img/front2.png' alt='front2'>",  
			"<img src='img/front3.png' alt='front3'>", 
			"<img src='img/front4.png' alt='front4'>", 
			"<img src='img/front5.png' alt='front5'>", 
			"<img src='img/front6.png' alt='front6'>", 
			"<img src='img/front7.png' alt='front7'>", 
			"<img src='img/front8.png' alt='front8'>",
			"<img src='img/front9.png' alt='front9'>", 
			"<img src='img/front10.png' alt='front10'>",
			"<img src='img/front11.png' alt='front11'>", 
			"<img src='img/front12.png' alt='front12'>", 
			"<img src='img/front13.png' alt='front13'>",
			"<img src='img/front14.png' alt='front14'>",
			"<img src='img/front15.png' alt='front15'>",
			"<img src='img/front16.png' alt='front16'>", 
			"<img src='img/front17.png' alt='front17'>", 
			"<img src='img/front18.png' alt='front18'>", 
			"<img src='img/front19.png' alt='front19'>", 
			"<img src='img/front20.png' alt='front20'>", 
			"<img src='img/front21.png' alt='front21'>",
			"<img src='img/front21b.png' alt='front21b'>",
			"<img src='img/front22.png' alt='front22'>",
			"<img src='img/front12b.png' alt='front12b'>"].sort(function() { return 0.5 - Math.random() });

var slicedfront = front.slice(0,6).concat(front.slice(0,6));
var newslicefront = slicedfront.sort(function() { return 0.5 - Math.random() });

for (var i = 0; i < document.getElementsByClassName("front").length; i++) {
	document.getElementsByClassName("front")[i].innerHTML = newslicefront[i];
	document.getElementsByClassName("back")[i].innerHTML = "<img src='img/back.png' alt = 'back'>"
}
