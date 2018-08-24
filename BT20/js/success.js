var success=location.search;
success=decodeURIComponent(success);
var user=success.split('+').join(' ');
var firstname=user.substring(1,user.search("&lastname"));
var lastname=user.substring(user.search("lastname"),user.search("&email"));
var email=user.substring(user.search("email"),user.search("&password"));
var year=user.substring(user.search("year"),user.search("&month"));
var month=user.substring(user.search("month"),user.search("&day"));
var day=user.substring(user.search("day"),user.search("&gender"));
var gender=user.substring(user.search("gender"),user.search("&address"));
var address=user.substring(user.search("address"),user.search("&number"));
var number=user.substring(user.search("number"),user.search("&submit"));
firstname=firstname.substring(10,firstname.length);
lastname=lastname.substring(9,lastname.length);
email=email.substring(6,email.length);
year=year.substring(5,year.length);
month=month.substring(6,month.length);
day=day.substring(4,day.length);
gender=gender.substring(7,gender.length);
address=address.substring(8,address.length);
number=number.substring(7,number.length);

var sex;

if (gender=="male") {
	sex = "lads";
}
else {
	sex = "lass";
}

document.getElementById("success").innerHTML = "<p>We hearby, our " + sex + ", " + firstname + " " + lastname + ", has become one of our adventurers.</p>";
