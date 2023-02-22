
	let carouselCounter = 0;
	let otherImages=document.getElementsByClassName('otherImage');

	//GET WIDTH OF SCREEN
	const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


	//FUNCTION TO GET TO NEXT IMAGE IN CAROUSEL
		let carouselNext = function(event){

			carouselCounter=carouselCounter+1;



			if (carouselCounter>=otherImages.length){
				carouselCounter=0;
			}

			var video2=document.getElementById("wearableReel");
			var video1=document.getElementById("wearableSelin");

			if (carouselCounter==1){
				document.getElementById('carouselImage').style.display='none';
				document.getElementById('wearableSelin').style.display='none';
				document.getElementById('wearableReel').style.display='block';
				video2.play();
				video1.pause();
 				//video2.muted = false;
				//video1.muted = true;

			}
			else if (carouselCounter==2){
				document.getElementById('wearableReel').style.display='none';
				document.getElementById('carouselImage').style.display='none';
				document.getElementById('wearableSelin').style.display='block';
				video1.play();
				video2.pause();
 			//	video1.muted = false;
				//video2.muted = true;

			}
			else{
				video2.pause();
				video1.pause();
			//video2.muted = true;
			//video1.muted = true;
			document.getElementById('carouselImage').style.display='block';
			document.getElementById('wearableReel').style.display='none';
			document.getElementById('wearableSelin').style.display='none';

			document.getElementById('carouselImage').src=otherImages[carouselCounter].src;}

		}

	//CHECK SCREEN WIDTH
	if(width<800){

		//IF PHONE RATION THEN HIDE CAROUSEL
		document.getElementById('blockCarousel').style.display='none';

		//DISPLAY IMAGES BELOW EACHOTHER
				for(let i=0;i<otherImages.length;i++){
						otherImages[i].style.display= 'block';
						document.getElementById('spacing').style.display ='block';

					}
				}

	else{
		//IF WIDE ENOUGH MAKE ARROW AND IMAGE CLICK NEXT IMAGE
					document.getElementById('nextArrow').addEventListener('click',carouselNext);
					document.getElementById('carouselImage').addEventListener('click', carouselNext);

	}
