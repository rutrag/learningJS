# learningJS

I've found solution how to hide arbitrary section of code!

"ctrl + k then ctrl + ," - create folding range from selection
"ctrl + k then ctrl + ." - remove

5.11.23
Today I've created some JS code and understand how a return statment works with several parameters

let tcInput = document.getElementById("tcInput");
let tcCelsInput = document.getElementById("tcCelsInput");
let tcFarhInput = document.getElementById("tcFarhInput");
let tcOutput = document.getElementById("tcOutput");

document.getElementById("tcBtn").onclick = function () {

    let temp = Number(tcInput.value);
    let c;

    function cels(temp, degree) {
    	temp = (tcInput.value - 32) * 5 / 9;
    	degree = "°";
    	return temp + degree;
    }
    function farh(temp, degree) {
    	temp = (tcInput.value * 9 / 5) + 32;
    	degree = String(degree);
    	return temp + degree;
    }
    if (tcCelsInput.checked){
    	tcOutput.innerHTML = cels() + "C";
    }
    else if (tcFarhInput.checked){
    	tcOutput.innerHTML =  farh(c,"°") + "F";
    }
    else{
    	tcOutput.innerHTML = "Select a temperatute"
    }

}
