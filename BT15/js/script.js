var point = 0;

var q1 = {
	question: "Question 1: What is the name of the phenomenon where the second hand looks like it stops moving?",
	answer1: "A: A time paradox.",
	answer2: "B: Stopwatch.",
	answer3: "C: The World.",	
	answer4: "D: Chronostasis.",
	trueanswer: "answer4"
};

var q2= {
	question: "Question 2: The word \"robot\" didn't come from English. So, what country did it come from?",
	answer1: "A: Slovakia.",
	answer2: "B: Czechoslovakia.",
	answer3: "C: Slovenia.",
	answer4: "D: Austria.",
	trueanswer: "answer2"
};

var q3 = {
	question: "Question 3: What the S in SOS means?",
	answer1: "A: Ship.",
	answer2: "B: Save.",
	answer3: "C: Soul.",
	answer4: "D: It's meaningless.",
	trueanswer: "answer4" 
};

var q4 = {
	question: "Question 4: At which of these location can you see the sunrise the earliest?",
	answer1: "A: Cape Nosappu.",
	answer2: "B: The summit of of Mt.Fuji.",
	answer3: "C: Cape Sata.",
	answer4: "D: They're all the same.",
	trueanswer: "answer2"
};

var q5 = {
	question: "Question 5: Which suit of cards represents the Holy Grail?",
	answer1: "A: (♣) Clubs.",
	answer2: "B: (♠) Spades.",
	answer3: "C: (♥) Hearts.",
	answer4: "D: (♦) Diamonds.",
	trueanswer: "answer3"
};

var star1 = document.getElementById("star1")
var star2 = document.getElementById("star2")
var star3 = document.getElementById("star3")
var star4 = document.getElementById("star4")
var star5 = document.getElementById("star5")

var questions = [q1, q2, q3, q4, q5];
var i = 0
var stars = [star1, star2, star3, star4, star5];

document.getElementById("question").innerText = questions[i].question;
document.getElementById("answer1").innerText = questions[i].answer1;
document.getElementById("answer2").innerText = questions[i].answer2;
document.getElementById("answer3").innerText = questions[i].answer3;
document.getElementById("answer4").innerText = questions[i].answer4;

function start() {
	document.getElementById("quests").className = "quizstart";
	document.getElementById("quests").style.top = "0px";
	document.getElementById("start").style.opacity = 0;

	document.getElementById("score").className = "keyhole";
	document.getElementById("score").style.opacity = 1;
}


function theanswer(x) {
	if (x.id == questions[i].trueanswer) {
		point += 1;
		// x.innerText = x.innerText + " correct";
		stars[i].style.display = "block";
		// document.getElementById("score").innerHTML = "<img src=\"img/star1.png\" width=\"10%\">";
	}
	else {
		// x.innerText = x.innerText + " wrong"
	}

	// document.getElementById("score").innerText = point + "/" + questions.length;

	i += 1;
	if (i < questions.length) {
		document.getElementById("question").innerText = questions[i].question;
		document.getElementById("answer1").innerText = questions[i].answer1;
		document.getElementById("answer2").innerText = questions[i].answer2;
		document.getElementById("answer3").innerText = questions[i].answer3;
		document.getElementById("answer4").innerText = questions[i].answer4;
	}
	else {
		if (point == questions.length) {
		window.location.assign("win.html")
		}
		else {
		document.getElementById("quiz").style.display = "none";	
		document.getElementById("lose").style.display = "block";	
		document.getElementById("again").style.display = "block";	
		}
	}
}

function again() {
	document.getElementById("quiz").style.display = "block";
	document.getElementById("lose").style.display = "none";	
	document.getElementById("again").style.display = "none";
	point = 0
	i = 0
	document.getElementById("question").innerText = questions[i].question;
	document.getElementById("answer1").innerText = questions[i].answer1;
	document.getElementById("answer2").innerText = questions[i].answer2;
	document.getElementById("answer3").innerText = questions[i].answer3;
	document.getElementById("answer4").innerText = questions[i].answer4;
	star1.style.display = "none";
	star2.style.display = "none";
	star3.style.display = "none";
	star4.style.display = "none";
	star5.style.display = "none";
}