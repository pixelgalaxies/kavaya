//Function to slide out side navigation
var toggle = false;
function slide() {
	if (!toggle) {
		document.querySelector(".slide-out").style.left="0px"
		toggle = true;
	}
	else if (toggle) {
		document.querySelector(".slide-out").style.left="-280px"
		toggle = false;
	}
}