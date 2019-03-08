//git init - to init the repository
//npm init - creates the json package
//npm install -g live-server
var _ = require('lodash');
//https://lodash.com
//originally lodash was created for Node.js but since we installed the browserify we can use it on javascript!
/*  "scripts": {
    "build": "browserify script.js > bundle.js"
  },*/
  //adding the above to package.json will build the bundle with a script that can be
  //run from the terminal - npn run build
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array,3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//input events trigger when the value of the <input> element is changed
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);