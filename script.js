var size = 14;

var hour = new Date().getHours(); 

var day = new Date().getDay();

var background = document.querySelector('body');


function ZoomIn()
{
	size++;
	document.querySelector("#content").style.fontSize = size + 'px';
}

function ZoomOut()
{
	size--;
	document.querySelector("#content").style.fontSize = size + 'px';
}

function Mode(){
	if (hour >= 23 || hour < 0) { // between 6:00 PM and 6:00 AM
		background.style.backgroundColor = 'salmon';
	}
	else{
		background.style.backgroundColor = 'black';
	}
}