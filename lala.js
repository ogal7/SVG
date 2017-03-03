//Olivia Gallager
//Softdev HW period 6



var container = document.getElementById("vimage");
var dvdBtn = document.getElementById("dvd");
var x = container.getAttribute("width")/2;
var y = container.getAttribute("height")/2;
console.log(y);
var stopBtn = document.getElementById("stop");
var circleBtn = document.getElementById("circle");
var reqId;
var shrinking = false;
var xcor = 0;
var ycor = 3;
	

//var img = new Image();
var drawImg = function (xcor, ycor) {
	var c =	document.createElementNS("http://www.w3.org/2000/svg", "image");
	c.setAttribute("href", "dvd.png");
	console.log("haha");
	c.setAttribute("x", xcor);
	c.setAttribute("y", ycor);
	c.setAttribute("height", "60px");
	c.setAttribute("width","60px");
	container.appendChild(c);
}
//img.src = "dvd.png";



//<image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>

var animateCircle = function() {
	var radius = 0;
	window.cancelAnimationFrame( reqId );

	var circle = function() {
		Astop()
		var c =	document.createElementNS("http://www.w3.org/2000/svg", "circle");
    	c.setAttribute("fill", "pink");
    	c.setAttribute("cx", x);
    	c.setAttribute("cy", y);
    	c.setAttribute("r", radius);
    	//console.log("hi");
    	container.appendChild(c);
		//console.log('haha');
		if (shrinking && radius == 0) {
			shrinking = false;
		}
		if (!shrinking) {
			radius ++;
		}
		if ((radius > container.getAttribute("width")/2 || radius > container.getAttribute("height")/2 || shrinking )) {
			radius --;
			shrinking = true;
		}
		reqId = window.requestAnimationFrame( circle );
	}
	circle();
}


var dvd = function() {
	var yDec = false;
	var xDec = false;
	window.cancelAnimationFrame( reqId );

	var bounceySquare = function () {
		Astop();
		//c.clearRect(0,0,canvas.width,canvas.height);
		//c.beginPath();
		//c.drawImage(img, xcor, ycor);
		drawImg(xcor,ycor);

		//c.fillRect(xcor,ycor,50,5
		if (xDec) {
			xcor --;
		}
		else {
			xcor ++;
		}
		if (yDec) {
			ycor --;
		}
		else {
			ycor++;
		}
		if (ycor + 60 >= 2*y) {
			yDec = true;
			console.log("ugh");
		}
		if (xcor + 60 >= 2*x) {
			xDec = true;
			console.log("ughh");
		}
		if (ycor <= 0) {
			yDec = false;
			console.log("ughhh");
		}
		if (xcor <= 0) {
			xDec = false;
			console.log("ughhhh");
		}
		reqId = window.requestAnimationFrame (bounceySquare)
	}
	bounceySquare();
}


var stopIt = function() {
	window.cancelAnimationFrame( reqId );
	console.log('ugh');
}





var Astop = function() {
	var list = document.getElementsByTagName("circle");
	var list2 = document.getElementsByTagName("image");
	while (list.length != 0) {
		container.removeChild(list[0]);
	}
	while (list2.length != 0) {
		container.removeChild(list2[0]);
	}
	//console.log("hi");
	//dots = 0;
	//x = 0;
	//y = 0;
	//xcor = 0;
	//ycor = 0;
}





stopBtn.addEventListener("click", stopIt);
circleBtn.addEventListener("click", animateCircle);
dvdBtn.addEventListener("click", dvd);





