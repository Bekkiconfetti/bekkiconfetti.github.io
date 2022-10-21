var timeoutInMiliseconds = 120000;
var timeoutId;

function startTimer() {
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}

function doInactive() {
    // does whatever you need it to actually do - probably signs them out or stops polling the server for info
		window.location.href = "index.html";
}

function setupTimers () {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);

    startTimer();
		console.log('started timer')
}

function resetTimer() {
    window.clearTimeout(timeoutId)

}

setInterval(setupTimers, 5000);




/*
let meetDado=document.getElementById('meetDadoText');

let animationAppearDado = function(event){
	document.getElementById('meetDadoVideo').style.display= 'block';
}

let animationDisappearDado = function(event){
	document.getElementById('meetDadoVideo').style.display= 'none';
}

meetDado.addEventListener('mouseover',animationAppearDado);
meetDado.addEventListener('mouseout',animationDisappearDado);

*/
