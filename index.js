/* 	
		A variable is container for strong data
		A variable behaves as if it was the value that it contains

		Two steps:
		1. Declaration (var, let, const)
		2. Assignment (* assigment operator)
*/


let firstName = "kitty";	//stings
let age = 17;					//number
let girl = true;				//booleans 1 or 0, yes or no, tue or false



							console.log("Hello",firstName);
							console.log("You are", age);
							console.log("ability:", girl);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are: " + age + "years old";
document.getElementById("p3").innerHTML = " Your abillity: " + girl;

/*
		Arithmetic expression is a combination of...
		operands (values, variables, etc.)
		that can be evaluated to a value
		ex. y = x + 5;
*/

let students = 10;
let extrastudents = students % 3; //  modules

/*
------------	Augmented assigment operator: " (operatop)= "	-----------------------

"students = students / 3;"		is the same like 		"students /= 3"
*/


							console.log("1/3 of 10 students: ", students)
							console.log("extrastudents: ", extrastudents)

document.getElementById("students1").innerHTML = "students = " + students / 3;
document.getElementById("students2").innerHTML = "extra students = " + extrastudents;


/*
			operator precendence
			1. parenthesis ()
			2. exponents
			3. multiplication & division
			4. addition & subtraction
*/

let result = 1 + 3 / (6 - 1 * 2);
							console.log("result = ", result);
document.getElementById("result").innerHTML = "result of 1 + 3 / (6 - 1 * 2) = " + result;

// 			How to accept user input

//	EASY WAY with a window prompt

/*
let fullname = window.prompt("what's your name?");
							console.log("fullname");
*/

//-------------------------------	Prompt	-----------------------------------------

let flname;
let yold;

document.getElementById("userbutton").onclick = function(){

	flname = document.getElementById("username").value;
								console.log("username");
	document.getElementById("user").innerHTML = "Your name: " + flname;
	yold = window.prompt("How old are you?")
	yold = Number(yold);
	yold += 1;
								console.log(typeof yold);
	document.getElementById("ages").innerHTML = "Ages: " + yold;
}

/*
	Type conversion = change the datatype of a value to another (string, number, boolean)

	let ages = window.prompt("How old are you?");

	ages = Number(ages);
	ages += 1;
								console.log(typeof ages)
								console.log(ages)
*/

let string;
let number;
let boolean;

string = 16;
number = String(16);
boolean = 16;

							console.log(string, typeof string);
							console.log(number, typeof number);
							console.log(boolean, typeof boolean);

string = String(string);
//number = Number(number);
boolean = Boolean(boolean);

							console.log("converted", string, typeof string);
							console.log("converted", number, typeof number);
							console.log("converted", boolean, typeof boolean);



// -----------------	Curcamference calculator	--------------------------------------

const pi = 3.14159;
let radius;
let curc_result;

document.getElementById("circalcbutton").onclick = function(){
	radius = document.getElementById("radius").value;
	curc_result = 2 * pi * radius;
	document.getElementById("circumference").innerHTML = curc_result;
}

//	--------------------	Math functions	-----------------------------------------------

let x;
x = 3.14;
let y = 5;
// const z = 9;  z is the const value, it doesn't change;
let z = -16.61;

							console.log("x = ", x, "y =", y, "z =", z);

x = Math.round(x);
y = Math.round(y);
z = Math.round(z);  

							console.log("| Math.round(x) = ", x, "| y = ", y, "| z = ", z, "|");

x = 3.14;
y = 5;
z = -16.14;

x = Math.floor(x);
y = Math.floor(y);
z = Math.floor(z);

							console.log("| Math.floor(x) = ", x, "| y = ", y, "| z = ", z, "|");

x = 3.14;
y = 5;
z = -16.61;

x = Math.ceil(x);
y = Math.ceil(y);
z = Math.ceil(z);

							console.log("| Math.ceil(x) = ", x, "| y =", y, "| z = ", z, "|");

x = 3.14;
y = 5;
z = -16.61;

x = Math.pow(x, y);
y = Math.pow(y);
z = Math.pow(z, 2);

							console.log("Ex. Math.pow(x, y) = x^y");
							console.log("x = Math.pow(x, y) = ", x, "| y = ", y, "| (z, 2) = ", z, "|" )

x = 3.14;
y = 5;
z = -16.61;

x = Math.sqrt(x);
y = Math.sqrt(y);
z = Math.sqrt(z);

							console.log("Math.sqrt(x) = ", x, "| y = ", y, "| z = ", z, "|");

x = 3.14;
y = 5;
z = -16.61;

x = Math.abs(x);
y = Math.abs(y);
z = Math.abs(z);

							console.log("Math.abs(x) = ", x, "| y = ", y, "| z = ", z, "|");

x = 3.14;
y = 5;
z = -16.61;

x = Math.abs(x - z);
y = Math.abs(y - 20);
z = Math.abs(z);

							console.log("Math.abs(x) = ", x, "| y = ", y, "| z = ", z, "|");

x = 3.14;
y = 5;
z = -16.61;

let maximum;
let minimum;

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

							console.log("Math.max(x, y, z) = ", maximum, "| Math.min(x, y, z) = ", minimum);

x = Math.PI;

							console.log("Math.PI = ", x);

//	-----------------------	Pifagor's calculator	--------------------------------------

let a;
let b;
let c;

document.getElementById("pifagorbutton").onclick = function(){
	a = Number(document.getElementById("sidea").value);
	b = document.getElementById("sideb").value;
	b = Number(b);
	c = Number(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
	document.getElementById("sidec").innerHTML = c;
}

//	-----------------------	Arrow to change input value	-----------------------------

let count = 0;

document.getElementById("arrowUpRadius").onclick = function(){
	count = Number(count);
	count += 1;
	document.getElementById("circumference").innerHTML = count;
}
document.getElementById("arrowDownRadius").onclick = function(){
	count = Number(count);
	count -= 1;
	document.getElementById("circumference").innerHTML = count;
}
document.getElementById("arrowUpPifagor").onclick = function(){
	count = Number(count);
	count += 1;
	document.getElementById("sidec").innerHTML = count;
}
document.getElementById("arrowDownPifagor").onclick = function(){
	count = Number(count);
	count -= 1;
	document.getElementById("sidec").innerHTML = count;
}

//	------------------------	Random numbers	-----------------------------------------

let random1;
let random2;
let random3;
let random4;

document.getElementById("randomBtn").onclick = function(){
	random1 = Math.floor(Math.random() * 99) + 1;
	random2 = Math.floor(Math.random() * 10) + 1;
	random3 = Math.floor(Math.random() * 6) + 1;
	random4 = Math.floor(Math.random() * 0) + 1;

	document.getElementById("randomNum1").innerHTML = random1;
	document.getElementById("randomNum2").innerHTML = random2;
	document.getElementById("randomNum3").innerHTML = random3;
	document.getElementById("randomNum4").innerHTML = random4;
}

//	-----------------------	Useful sting property and methods	-----------------------

let fullName = "Gar   Team";
let fstName;
let lstName;

							console.log("fullName: ",
fullName, "|");
							console.log("fullName.lenght: ",
fullName.length, "|");
							console.log("the third letter by fullName.charAT(2): ",
fullName.charAt(2), "| ", "the first letter by fullName.charAT(0): ",
fullName.charAt(0));
							console.log("first position of ' '(space) by fullName.indexOf(' '): ",
fullName.indexOf(" "), "|");
							console.log("last position of ' '(space) by fullName.lastIndexOf(' '): ",
fullName.lastIndexOf(" "), "|");
							console.log("remove empty space by fullName.trim(): ",
fullName.trim(), "|");
							console.log("fullName.toUpperCase(): ",
fullName.toUpperCase(), "|");
							console.log("fullName.toLowerCase(): ",
fullName.toLowerCase(), "|");
							console.log("replace ' '(space) to '-' by fullName.replaceAll(' '', '-'')",
fullName.replaceAll(" ", "-"), "|");
							console.log("fstName = fullName.slice(0, fullName.indexOf(' ')): ", fstName =
fullName.slice(0, fullName.indexOf(" ")));
							console.log("lstName = fullName.slice(fullName.lastIndexOf(' ') + 1);", lstName = 
fullName.slice(fullName.lastIndexOf(" ") + 1));


//	------------------	Chaining metod		=	calling one metod after another	--------
let hi = "hi there";
							console.log("hi = ", hi);
console.log(
	hi.slice(
		hi.charAt(0), hi.indexOf(" ")
	).replace(
		hi.charAt(0), hi.charAt(0).toUpperCase()
		)
);

//	-----------------------	If, else statement	--------------------------------------

let yo;

document.getElementById("ageBtn").onclick = function(){
	yo = Number(document.getElementById("ageInput").value);
	if(yo >= 150){
		yo = "bullshitter"; 
		document.getElementById("ageBtn").innerHTML = "lmao";
		document.getElementById("ageLabel").innerHTML = "liar";
	}
	else if(yo >= 55) 	{yo = "senior";}
	else if(yo >= 18) 	{yo = "adult";}
	else if(yo >= 12) 	{yo = "teenager";}
	else if(yo < 0)		{yo = "You haven't been born yet!";}
	else						{yo = "child";}
	document.getElementById("ageResult").innerHTML =
	yo.replace(yo.charAt(0), "You're " + yo.charAt(0).toUpperCase())
	.replace("You're You", "You");
}

//	-----------------------		checked property	--------------------------------------

let gender;

document.getElementById("genderBtn").onclick = function(){
	const genderResult = document.getElementById("genderResult");
	const agreeGender = document.getElementById("agreeGender");
	const traGender = document.getElementById("traGenderInput");
	const mlGender  = document.getElementById("mlGenderInput");
	const fmlGender = document.getElementById("fmlGenderInput");

	if(agreeGender.checked){
		if(traGender.checked)		{genderResult.innerHTML = "transexual";}
		else if(mlGender.checked)	{genderResult.innerHTML = "male";}
		else if(fmlGender.checked)	{genderResult.innerHTML = "female";}
	}
	else{genderResult.innerHTML = "You haven't agreed to Privacy Policy"};
}

/*	-----------------------	 			Switch		--------------------------------------
---	statemanet that examines a value for a match aganst many case clauses	--------
---					More efficient that many "else if" statement			---------------*/

let weather = Number(0);

/*if(weather > 30){weather = "hot"}
else if(weather > 20){weather = "warm"}
else if(weather > 10){weather = "cool"}
else if(weather > 5){weather = "chilly"}
else if(weather > 0){weather = "cold"}
else{weather = "freezing"}*/

switch(true){ 
	case weather > 30: weather = "hot";
		break;
	case weather > 20: weather = "warm";
		break;
	case weather > 10: weather = "cool";
		break;
	case weather > 5: weather = "chilly";
		break;
	case weather > 0: weather = "cold";
		break;
	default: weather = "freezing";
}
console.log(weather)

let grade = "123A";

switch(grade){
	case "A": grade = "Great grade!"; break;
	case "B": grade = "Good grade!"; break;
	case "C": grade = "Ok grade"; break;
	case "D": grade = "Passed grade!"; break;
	case "F": grade = "Falled grade!"; break;
	default: grade = grade + " isn't a letter grade";
}
console.log(grade)

//	------------	And (&&), Or (||) and Not (!) logical operators	--------------------

let temp = 32;
let sunny = false;

if((temp >= 30 && sunny)||temp >= 33){
	console.log("It's Hot!")}
else if(((temp > 0 && temp < 30) && sunny) ||((temp >= 30 && temp < 33) && !sunny)){
	console.log("There is Cool weather!")}
else{console.log("It'bad weather")};

console.log(!sunny)	//Not (!) logical operator invert boolean function 


//	------------------	While	loop	--------------------------------------------------
//	---------	Repeat some code while some condition is true potentially infinite	-----

//let someValue = "";
//
//while(someValue == ""){console.log("someValue wasn't changed")} //leads to infinite loop
//
//let smValue = 23123;
//do{
//	smValue = window.prompt("Enter enything exept '1'");
//}while(smValue == "" || smValue == "1");
//
let loading = 0;

while(loading < 100){
	console.log("while(loading < 100){console.log();loading++;0}")
	loading++;};	//++ is short of += 1

//	-----------	For loop	- repeat some code a certain amount of times	-----------------

const waifus = ["Yor Forger", "Kitagawa Marin", "Hayase Nagatoro", "Tomo Aizawa", "Mikasa Ackerman", "Mahiru Shina", "Akira Asai", "Orihime Inoue", "Himiko Toga", "Rukia Kuchiki"]

for(waifu of waifus){
	if(waifu === "Yor Forger"){
		waifu = "The best waifu " + waifu;
	}
	console.log(waifu);
}

for(let i = 7; i > - 2; i-=2){
	console.log("variable of i by for(let i = 7; i > - 2; i-=2){console.log(i)}", i)
}

//	------------------	break and continue	-----------------------------------------

for(let i = 1; i < 5; i+=1){
	if(i == 3){continue;}
	console.log("continue ", i)
}

for(let i = 1; i < 5; i+=1){
	if(i == 3){break;}
	console.log("break ", i)
}

//	------------------	break and continue	-----------------------------------------

for(let i = 1; i < 5; i+=1){
	if(i == 3){break;}
	console.log("breaking", i+="a") 
	for(let a = 2; a < 7; a+=2){
		console.log(a += "b");
	}
}

//	----	Rectangle	--------	nested - a loop inside of another loop	-----------------

let column;
let row;

document.getElementById("rectangleBtn").onclick = function(){
	const text = document.getElementById("rectangleText");
	const rowInput = document.getElementById("rectangleRowInput");
	let r = rowInput.value;
	const columnInput = document.getElementById("rectangleColumnInput");
	let c = columnInput.value;
	if(!(text.innerHTML = "")){
		text.innerHTML = "";
	}

	row = r;
	if(r < 0){r = 0}
	else if(r > 40){r = 40}

	column = c;
	if(c < 0){c = 0}
	else if(c > 40){c = 40}

	for(let i = 1; i <= row; i+=1){
		for(let a = 1; a <= column; a+=1){
			text.innerHTML += "x";
			console.log("x");
		}
		text.innerHTML += "<br>";
		console.log("1 ", i, a, row, column);
	}
}

//	------------------	Function - define code once and use it many times	-----------
//	------------------	To perform some code, call the fuction name	-----------------

heroName1();
function heroName1(){
	let fname = "Roxy";
	let lname = "Migurdia";
	heroNameCons(fname, lname);
}

heroName2();
function heroName2(){
	let fname = "Sylphiette";
	let lname = "";
	heroNameCons(fname, lname);
}

heroName3();
function heroName3(){
	let fname = "Eris";
	let lname = "Boreas Greyrat";
	heroNameCons(fname, lname);
}

function heroNameCons(a, b){
	console.log("Name", a, b);
	console.log("");
}

//	-Return statement - returns a value back to the place where you invoked function	--


let area = getArea(a,b);  // getArea(wigth, height) = getArea(a,b) or getArea(anything, anything)

console.log(area);

function getArea(width, height){
	width = 4;
	height = 3;
	return width * height;
}

//	---------	Condition(ternary) operator - Shortcut for an if/else statement	-----
//	---------	Syntax: condition ? expressoinIfTrue : expressionIfFalse	--------------

let beverage;

beverage = getBeverage(120);

console.log(beverage);

function getBeverage(adultAge){
	return adultAge >= 18 ? beverage = "sidr" : beverage = "juice";
}


checkWinner(false);

function checkWinner(win){
	win ? console.log("You win!") : console.log("You Lose;")
}

//	---------------------------------	var vs let	-----------------------------------
//	let - variables are limited to block scope {}
//	var - variables are limited to a function(){}

//	global variables is declared outside any function
// but var will CHANGE browser's window properties instead of let
// window properties can be seen in browser's console -> window

for(let i = 33; i < 39; i+=2){
	console.log("let into 'for{i}': ", i)
}
console.log("let out of 'for{}i': leads to undefined i");

doSmth()
function doSmth(){
	for(var i = 33; i < 39; i+=2){
		console.log("var into for'function(){for{i}}': ", i)
	}
	console.log("var into function 'funtion(){for{}i}': ", i);
}
console.log("var out of function'for{}i': leads to undefined i");

//	------	template literals(strings) - delimited with backtick (`)	-----------------
//	------	allows embedded expressions and tagged templates ($)	--------------------

let templName = "Honami Ichinose";
let templAge = 18;
let templCounrty = "Japan";

let cardPerson;

tempFunc(true);

function tempFunc(girl){
girl ? console.log(`Hi, ${templName}! You are ${templAge}years old from ${templCounrty}`) : console.log(`${templName}, you are not girl`)
}

//	toLocaleString() method - returns a Date object as a string, using locale settings-
//	------	Syntax: Date.toLocaleString(locales, options)	--------------------------

let tlsNum = 1003454623;

console.log(tlsNum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log(tlsNum.toLocaleString("ru-Ru", {style: "currency", currency: "RUB"}));
console.log(tlsNum.toLocaleString("ar-SA", {style: "currency", currency: "USD"}));
console.log(tlsNum.toLocaleString(undefined, {style: "percent"}));
console.log(tlsNum.toLocaleString(undefined, {style: "unit", unit: "meter"}));

//	------------------------	Number Guessing Game 2.0	-----------------------------

let ggGuess = document.getElementById("ggGuess");
let ggReal = document.getElementById("ggReality");
let ggInput = document.getElementById("ggInput");
let ggWin = document.getElementById("ggWin");
let ggLose = document.getElementById("ggLose");

document.getElementById("ggArrowUp").onclick = function(){
	let giv = Number(ggInput.value);
	ggInput.value = giv + 1;
}

document.getElementById("ggArrowDown").onclick = function(){
	let giv = Number(ggInput.value);
	ggInput.value = giv - 1;
}

document.getElementById("ggBtn").onclick = function(){
	let giv = Number(ggInput.value);
	let gw = Number(ggWin.innerHTML);
	let gl = Number(ggLose.innerHTML);
	if(giv < 1||giv > 9){
		alert(`You must guess a number from 1 to 9, your "${ggInput.value}" will be changed to "0"`)
		console.log(ggInput.value, giv);
	}
	else{
		let answer = Math.floor(Math.random() * 9 + 1);
		ggReal.innerHTML = answer;

		if(answer > giv||answer < giv){
		ggLose.innerHTML = gl + 1;
		}
		else{
		ggWin.innerHTML = gw + 1;
		alert("You're win!")
		}
		ggGuess.innerHTML = ggInput.value;
	}
}