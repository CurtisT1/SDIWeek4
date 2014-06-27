//alert("JavaScript works!");


/* Curtis Tate
	SDI 1406
	Assignment 4 */

// global Variables 


var checkPhoneNum;
var urlMatch;
var capLetter;
var checkemail;

// function 

 var checkPhoneNum = function(val) {
 var phonenum = val;
 var dash1 = (phonenum.substring(3, 4));
 var dash2 = (phonenum.substring(7,8));
 	if (dash1 == "." && dash2 == ".") {
 	if (phonenum.length == ".") {
 	return true;
 	} else {return fasle;
 }
 };
//function

var url = function (typeurl) {
var preUrl = type.prestr(0,8);
	if (preUrl.contains ("http://")) {
return true;
	} else {
console.log ("do not Match"); };
}; 

// Prompt for Input

myPrompt = prompt ("Enter Url");
if (myPrompt === "http://www.ign.com") {
	console.log("Its a match");
if	(myPrompt === "http//:www.google.com") {
	console.log("Not a Match Try Again");	
} else {
	console.log("Wrong Url Try again");
};
} else {
	console.log("Its a Match congratulations");
};


// function 

var FirstCase = function (srtinginput) {
var letter = stringinput.split ("");
	for (i + 0; i<word.length; i++) { [i].substr(0,1).upperCase() + word[i].substr(1).lowerCase();
};
	var capletter = letter.combine ("");
	return capLetter;
};


// function 

var checkemail = function(val) {
var at = email.indexof("@"); 
var email = val;
var dot = email.lastaindexof(".");

if (at == -1 ||dot == -1 || (at + 2) >= dot) { 
	return false;
} else {
	return true;
}
};



