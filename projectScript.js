
let otherImages=document.getElementsByClassName('otherImage');

//SCRAMBLING PROJECTS BEGINNING 
//let startButton=document.getElementById('aboutImage');
const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;

let scramble = function(event){
			//SCRAMBLE
					for(let i=0;i<otherImages.length;i++){
					otherImages[i].style.display= 'block';
					otherImages[i].style.position='absolute';
					otherImages[i].style.top= Math.floor(Math.random()* (50 - 8 + 1) + 8)+'%';
					otherImages[i].style.left=Math.floor(Math.random()* (70 - 25 + 1) + 25)+'%';
					otherImages[i].style.zIndex=Math.floor(Math.random()*(4-1) + 1);
				}
			}

if(width<800){
	//document.body.style.backgroundColor = 'aqua';
			for(let i=0;i<otherImages.length;i++){
					otherImages[i].style.display= 'block';
					document.getElementById('spacing').style.display ='block';
				}
			}

else{

			//startButton.addEventListener('click',scramble);
				window.addEventListener('load',scramble);

				for(let i=0; i<otherImages.length; i++) {
					otherImages[i].addEventListener('click',scramble);
				}

}
