
var close = false;
function life(){
	close = !close;
	if(close == false)
		document.getElementById("manu").style.display = "block";
	else
		document.getElementById("manu").style.display = "none";
}
function nextButton(){
	document.getElementById("word").style.display = "none";
	document.getElementById("nextWord").style.display = "block";
}
function startGame(){
	document.getElementById("introduction").style.display = "none";
}
