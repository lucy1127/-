
var close = false;
function life(){
	close = !close;
	if(close == false)
		document.getElementById("manu").style.display = "block";
	else
		document.getElementById("manu").style.display = "none";
}
