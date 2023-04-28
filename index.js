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
------------	Augmented assigment operator: " (operatop)= "	------------------

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

//	DIFFICULT WAY HTML textbox

let fullname;
let ages;

document.getElementById("userbutton").onclick = function(){

	fullname = document.getElementById("fullname").value;
								console.log("fullname");
	document.getElementById("user").innerHTML = "Your name: " + fullname;
	ages = window.prompt("How old are you?")
	ages = Number(ages);
	ages += 1;
								console.log(typeof ages);
	document.getElementById("ages").innerHTML = "Ages: " + ages;
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



// -----------------	Curcamference calculator	---------------------------------

const pi = 3.14159;
let radius;
let curc_result;

document.getElementById("circalcbutton").onclick = function(){
	radius = document.getElementById("radius").value;
	curc_result = 2 * pi * radius;
	document.getElementById("circumference").innerHTML = curc_result;
}

//	--------------------	Math functions	------------------------------------------

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

//	-----------------------	Pifagor's calculator	---------------------------------

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

//	-----------------------	Arrow to change input value	-----------------------

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

//	-----------------------	Useful sting property and methods	--------------------

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


//	------------------	Chaining metod		=	calling one metod after another	-----
let hi = "hi there";
							console.log("hi = ", hi);
console.log(
	hi.slice(
		hi.charAt(0), hi.indexOf(" ")
	).replace(
		hi.charAt(0), hi.charAt(0).toUpperCase()
		)
);

//	-----------------------	If, else statement	-----------------------------------

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

//	-----------------------		checked property	-----------------------------------

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
