
	//document.body.style.backgroundColor = "red";


// Show Video ELYA

let imageElya=document.getElementById('imageElya');

let animationAppearElya = function(event){
	//Show Text
	document.getElementById('fullInterview').style.display= 'block';

	//Hide all other Videos
	var memberVideos= document.getElementsByClassName('memberVideo');
	for( var i=0; i<memberVideos.length;i++){
		memberVideos[i].style.display='none';
	}
		//Show appropriate Interview
	document.getElementById('videoElya').style.display= 'block';
	window.scrollTo(0, document.body.scrollHeight);
}

imageElya.addEventListener('click',animationAppearElya);



// Show Video GINEVRA


let imageGinevra=document.getElementById('imageGinevra');

let animationAppearGinevra = function(event){
	//Hide all other Videos
	var memberVideos= document.getElementsByClassName('memberVideo');
	for( var i=0; i<memberVideos.length;i++){
		memberVideos[i].style.display='none';
	}


	document.getElementById('videoGinevra').style.display= 'block';
	window.scrollTo(0, document.body.scrollHeight);
}

imageGinevra.addEventListener('click',animationAppearGinevra);
