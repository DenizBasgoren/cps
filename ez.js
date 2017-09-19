
// MODEL
var time = 0;
var cps = 0;
var record = 0;




// CONTROLLER

setInterval( function () {
	time += 0.01;
},10);

window.onclick = function (e) {
	e.preventDefault();
	cps = 1/time;
	time = 0;
	if (cps > record) {
		record = cps;
	}
	view();
}




// VIEW

function view() {
	document.getElementById('cps').innerHTML = cps.toFixed(2);
	document.getElementById('record').innerHTML = record.toFixed(2);
}

setInterval(function () {
	var korsan = document.getElementsByTagName('korsan')[0];
	korsan.style.color = "#f00";

	setTimeout(function () {
		korsan.style.color = "#d00";
	},200);

},3000);


// click
//setinterval starts counting
//click
//interval is stopped
//cps is calculated
//time is emptied
