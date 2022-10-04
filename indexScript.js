



let coverImages=document.getElementsByClassName('coverImage');
let startButton=document.getElementById('start');

//SCRAMBLING PROJECTS BEGINNING
//let startButton=document.getElementById('aboutImage');
const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;

let scramble = function(event){
			//SCRAMBLE
					for(let i=0;i<coverImages.length;i++){
					coverImages[i].style.display= 'block';
					coverImages[i].style.position='absolute';
					coverImages[i].style.top= Math.floor(Math.random()* (50 - 8 + 1) + 8)+'%';
					coverImages[i].style.left=Math.floor(Math.random()* (70 - + 1) )+'%';
					coverImages[i].style.zIndex=Math.floor(Math.random()*(4-1) + 1);
				}
			}

if(width<800){

			for(let i=0;i<coverImages.length;i++){
					coverImages[i].style.display= 'block';
					document.getElementById('spacing').style.display ='block';
				}
			}

else{

			startButton.addEventListener('click',scramble);
				window.addEventListener('load',scramble);

}
