//document.body.style.backgroundColor = 'aqua';


let coverImages=document.getElementsByClassName('coverImage');
let otherImages=document.getElementsByClassName('otherImage');

//SCRAMBLING PROJECTS BEGINNING
let startButton=document.getElementById('start');
let myName=document.getElementById("name");
	
let scramble = function(event){

	//other images background, hide text
	
	let expandedProjects = document.getElementsByClassName('expandedProject');
	
	for (i=0; i<expandedProjects.length ; i++) {
		expandedProjects[i].style.display='none';
	}
	
	//SCRAMBLE	

    for (let i=0; i< coverImages.length; i++){
	    coverImages[i].style.display= 'block';
	    coverImages[i].style.position='absolute';
	    coverImages[i].style.top=Math.floor(Math.random()* (200 - 0 + 1) + 0)+'%';
	    coverImages[i].style.left=Math.floor(Math.random()* (75 - 20 + 1) + 20)+'%';
	    coverImages[i].style.opacity='1';
	    
	}
	
	//LET ABOUT CARD DISAPPEAR IF DISPLAYED
	  document.getElementById('aboutImage').style.display ='none';
	  document.getElementById('aboutText').style.display ='none';
	
}


startButton.addEventListener('click',scramble);
myName.addEventListener('click',scramble);


//PUT ABOUT CARD ON RANDOM SPOT


let show = function(event){
   	
	let aboutCard=document.getElementById('aboutImage');
	
	aboutCard.style.display = 'block';
	aboutCard.style.position='absolute';
	aboutCard.style.top=Math.floor(Math.random()* (100 - 0 + 1) + 0)+'%';
	aboutCard.style.left=Math.floor(Math.random()* (80 - 25 + 1) + 25)+'%';
	
	document.getElementById('aboutText').style.display='block';
	
	//other images background, hide text
	
	let expandedProjects = document.getElementsByClassName('expandedProject');
	
	for (i=0; i<expandedProjects.length ; i++) {
		expandedProjects[i].style.display='none';
	}
	
	for (let i=0; i<coverImages.length; i++){
	coverImages[i].style.opacity='0.5';
	}
	
	
	

	

}


myName.addEventListener('click',show);
	
	



//EXPANDING PROJECTS ON CLICK

let projects=document.getElementsByClassName('project');

let expand= function(event) {

	//HIDE OTHER EXPANDED PROJECTS

		let expandedProjects=document.getElementsByClassName('expandedProject')
	
		for(let i=0; i<expandedProjects.length; i++) {
		expandedProjects[i].style.display= 'none';
		}
	
	
	//LET ABOUT CARD DISAPPEAR IF DISPLAYED
	  document.getElementById('aboutImage').style.display ='none';
	  document.getElementById('aboutText').style.display ='none';
	  
	  
	//EXPAND PROJECT
	  
	  	//scramble positions of all other images
	  	for(let i=0;i<otherImages.length;i++){
			otherImages[i].style.position='absolute';
			otherImages[i].style.top= Math.floor(Math.random()* (200 - 0 + 1) + 0)+'%';
			otherImages[i].style.left=Math.floor(Math.random()* (75 - 20 + 1) + 20)+'%';
			otherImages[i].style.zIndex='1';
		}
		//show other images of projects
		event.target.nextElementSibling.style.display ='block';
	
	  
	  
	  
	//COME TO FRONT
	
		for( let i=0; i<coverImages.length;i++) {
			coverImages[i].style.zIndex='0';
			coverImages[i].style.opacity='0.5';
		}
	
		event.target.style.zIndex='1';
		event.target.style.opacity='1';
	
}

for(let i=0; i<coverImages.length; i++) {
	coverImages[i].addEventListener('click',expand)
}


//CLICK ON OTHER IMAGES TO RESCRAMBLE

let scrambleOtherImages = function (event) {
	
	//scramble positions of all other images
	  	for(let i=0;i<otherImages.length;i++){
			otherImages[i].style.position='absolute';
			otherImages[i].style.top= Math.floor(Math.random()* (200 - 0 + 1) + 0)+'%';
			otherImages[i].style.left=Math.floor(Math.random()* (75 - 20 + 1) + 20)+'%';
			otherImages[i].style.zIndex='1';
		}
	
	
}

for(let i=0; i<otherImages.length; i++) {
	otherImages[i].addEventListener('click',scrambleOtherImages)
}






/*
let loopCheck = document.createElement('p');
	loopCheck.innerHTML=coverImages.length;
	document.body.appendChild(loopCheck);
	

*/