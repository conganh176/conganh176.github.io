var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var year = now.getYear();

if (year < 1900) {
    year=year+1900;
};

for (var i = year; i >= 1900; i--) {
	document.getElementById("year").innerHTML+="<option>" + i + "</option>";
};

document.getElementById("year").onchange = function() {
	document.getElementById("month").innerHTML = "";
	document.getElementById("month").innerHTML = "<option>Month</option>"
	document.getElementById("day").innerHTML = "";
	document.getElementById("day").innerHTML = "<option>Day</option>"
	if (document.getElementById("year").value != "Year") {
		console.log("notyear");
		for (var i = 0; i < month.length; i++ ) {
		document.getElementById("month").innerHTML+="<option>" + month[i] + "</option>";
		};
	};
};

document.getElementById("month").onchange = function() {
	document.getElementById("day").innerHTML = "";
	document.getElementById("day").innerHTML = "<option>Day</option>"
	if (document.getElementById("month").value=="April" || document.getElementById("month").value=="June" || document.getElementById("month").value=="September" || document.getElementById("month").value=="November") {
		for (var i = 1; i <= 30; i++) {
			document.getElementById("day").innerHTML+="<option>" + i + "</option>";
		}
	}
	else if (document.getElementById("month").value=="February") {
		if (document.getElementById("year").value%4 == 0) {
			for (var i = 1; i <= 29; i++) {
				document.getElementById("day").innerHTML+="<option>" + i + "</option>";
			}
		}
		else {
			for (var i = 1; i <= 28; i++) {
				document.getElementById("day").innerHTML+="<option>" + i + "</option>";
			}
		}
	}
	else {
		for (var i = 1; i <= 31; i++) {
			document.getElementById("day").innerHTML+="<option>" + i + "</option>";
			}
		}
	
}

