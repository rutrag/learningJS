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
let username = window.prompt("what's your name?");
console.log("username");
*/

//	DIFFICULT WAY HTML textbox

let username;
let ages;

document.getElementById("userbutton").onclick = function(){

	username = document.getElementById("username").value;
	console.log("username");
	document.getElementById("user").innerHTML = "Your name: " + username;
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
number = 16;
boolean = 16;

console.log(string, typeof string);
console.log(number, typeof number);
console.log(boolean, typeof boolean);

string = String(string);
number = Number(number);
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
	document.getElementById("circumference").innerHTML = "circumference: " + curc_result;
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

a = 3;
b = 4;

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

console.log("angle of c = ", c)