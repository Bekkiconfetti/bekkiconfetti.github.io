let weaves=document.getElementsByClassName('weave');
console.log(weaves);
let color="black"
let color2="blue";

for(let i=0;i<weaves.length;i++){
	let pick=Math.round(Math.random());
	if(pick==1){
	weaves[i].style.backgroundColor=color2;
	
	}
	else{
		weaves[i].style.backgroundColor=color;
	}
}

if(window.innerWidth<400){
	document.body.style.marginTop='160px';
}

function getRandomColor() {
var r = Math.floor(Math.random() * 256); // Random between 0-255
var g = Math.floor(Math.random() * 256); // Random between 0-255
var b = Math.floor(Math.random() * 256); // Random between 0-255
return 'rgb(' + r + ',' + g + ',' + b + ')';
}
