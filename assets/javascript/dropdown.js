//Functions for the navbar menu display
function menuOpen() {
	document.querySelector(".s-nav").style.display="inherit";
	
	document.querySelector(".menu-icon").style.display="none";
	
	document.querySelector(".x-icon").style.display="inherit";
}

function menuClose() {
	document.querySelector(".s-nav").style.display="none";
	
	document.querySelector(".menu-icon").style.display="inherit";
	
	document.querySelector(".x-icon").style.display="none";
}