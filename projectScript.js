let carouselCounter = 0;

let otherImages=document.getElementsByClassName('otherImage');

//SCRAMBLING PROJECTS BEGINNING
//let startButton=document.getElementById('aboutImage');
const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;

let scramble = function(event){
			document.getElementById('blockCarousel').style.display='none';
			//SCRAMBLE
					for(let i=0;i<otherImages.length;i++){
					otherImages[i].style.display= 'block';
					otherImages[i].style.position='absolute';
					otherImages[i].style.top= Math.floor(Math.random()* (50 - 8 + 1) + 8)+'%';
					otherImages[i].style.left=Math.floor(Math.random()* (70 - 25 + 1) + 25)+'%';
					otherImages[i].style.zIndex=Math.floor(Math.random()*(4-1) + 1);
				}
			}

let carousel = function(event){
	//show Carousel and hide otherImages
	document.getElementById('blockCarousel').style.display='block';
	for(let i=0;i<otherImages.length;i++){
			otherImages[i].style.display= 'none';
			}

}

let carouselNext = function(event){

	carouselCounter=carouselCounter+1;

	if (carouselCounter>=otherImages.length){
		carouselCounter=0;
	}

	document.getElementById('carouselImage').src=otherImages[carouselCounter].src;

}

let carouselPrev = function(event){

	carouselCounter=carouselCounter-1;

	if (carouselCounter<=0){
		carouselCounter=otherImages.length-1;
	}

	document.getElementById('carouselImage').src=otherImages[carouselCounter].src;

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
				document.getElementById('title').addEventListener('click',scramble);

				document.getElementById('nextArrow').addEventListener('click',carouselNext);
				document.getElementById('prevArrow').addEventListener('click',carouselPrev);

				for(let i=0; i<otherImages.length; i++) {
					otherImages[i].addEventListener('click', carousel);
				}

}
