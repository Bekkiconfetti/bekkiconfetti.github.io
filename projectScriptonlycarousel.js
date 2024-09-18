
	let carouselCounter = 0;
	let otherImages=document.getElementsByClassName('otherImage');
	let staticCarouselImages=document.getElementsByClassName('staticCarousel');
	let captionTexts=document.getElementsByClassName('captions');

	//GET WIDTH OF SCREEN
	const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


	//FUNCTION TO GET TO NEXT IMAGE IN CAROUSEL
		let carouselNext = function(event){

			carouselCounter=carouselCounter+1;

			if (carouselCounter>=otherImages.length){
				carouselCounter=0;
			}

			document.getElementById('carouselImage').src=otherImages[carouselCounter].src;
			document.getElementById('curCaption').innerHTML=captionTexts[carouselCounter].innerHTML;
		}

	//CHECK SCREEN WIDTH
	if(width<800){

		//IF PHONE RATIO THEN HIDE CAROUSEL
		document.getElementById('blockCarousel').style.display='none';

		for(let i=0;i<staticCarouselImages.length;i++){
			staticCarouselImages[i].style.display='none';
		}

		//DISPLAY IMAGES BELOW EACHOTHER
				for(let i=0;i<otherImages.length;i++){
						otherImages[i].style.display= 'block';
					if(captionTexts.length !=0){	captionTexts[i].style.display='block'; }
						document.getElementById('spacing').style.display ='block';

					}
				}

	else{
		//IF WIDE ENOUGH MAKE ARROW AND IMAGE CLICK NEXT IMAGE
					document.getElementById('nextArrow').addEventListener('click',carouselNext);
					document.getElementById('carouselImage').addEventListener('click', carouselNext);

	}
