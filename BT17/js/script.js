var front1 = "<img src='img/front1.png' alt='front1'>";
var front2 = "<img src='img/front2.png' alt='front2'>";
var front3 = "<img src='img/front3.png' alt='front3'>";
var front4 = "<img src='img/front4.png' alt='front4'>";
var front5 = "<img src='img/front5.png' alt='front5'>";
var front6 = "<img src='img/front6.png' alt='front6'>";
var front7 = "<img src='img/front7.png' alt='front7'>";
var front8 = "<img src='img/front8.png' alt='front8'>";
var front9 = "<img src='img/front9.png' alt='front9'>";
var front10 = "<img src='img/front10.png' alt='front10'>";
var front11 = "<img src='img/front11.png' alt='front11'>";
var front12 = "<img src='img/front12.png' alt='front12'>";
var front13 = "<img src='img/front13.png' alt='front13'>";
var front14 = "<img src='img/front14.png' alt='front14'>";
var front15 = "<img src='img/front15.png' alt='front15'>";
var front16 = "<img src='img/front16.png' alt='front16'>";
var front17 = "<img src='img/front17.png' alt='front17'>";
var front18 = "<img src='img/front18.png' alt='front18'>";
var front19 = "<img src='img/front19.png' alt='front19'>";
var front20 = "<img src='img/front20.png' alt='front20'>";
var front21 = "<img src='img/front21.png' alt='front21'>";
var front21b = "<img src='img/front21b.png' alt='front21b'>";
var front22 = "<img src='img/front22.png' alt='front22'>";
var front12b = "<img src='img/front12b.png' alt='front12b'>";

var front = [front1, front2, front3, front4, front5, front6, front7, front8, front9, front10, front11, front12, front13, front14, front15, front16, front17, front18, front19, front20, front21, front22, front21b, front12b]
// var randomfront = front[Math.floor(Math.random()*front.length)];
var newfront = front.sort(function() { return 0.5 - Math.random() });
var slicedfront = newfront.slice(0,6).concat(newfront.slice(0,6));
var newslicefront = slicedfront.sort(function() { return 0.5 - Math.random() });

var back = document.getElementsByClassName("front");
// var randomback = back[Math.floor(Math.random()*back.length)];

back[0].innerHTML = newslicefront[0];
back[1].innerHTML = newslicefront[1];
back[2].innerHTML = newslicefront[2];
back[3].innerHTML = newslicefront[3];
back[4].innerHTML = newslicefront[4];
back[5].innerHTML = newslicefront[5];
back[6].innerHTML = newslicefront[6];
back[7].innerHTML = newslicefront[7];
back[8].innerHTML = newslicefront[8];
back[9].innerHTML = newslicefront[9];
back[10].innerHTML = newslicefront[10];
back[11].innerHTML = newslicefront[11];

// document.getElementsByClassName("front")[0].innerHTML= randomfront;
