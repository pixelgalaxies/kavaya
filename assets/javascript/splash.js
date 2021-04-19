// Function to generate one of seven Emery's Laws for title screen 
function generateLaw(){
	const law = document.querySelector(".law");
	const bg = document.querySelector("body");
	var random = Math.floor((Math.random() * 7) + 1);
	//switch case to determine which law is displayed
	switch(random) {
		case 1:
			law.innerHTML = '"For what is borrowed, must always be repaid."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/1.jpg)";
			break;
		case 2:
			law.innerHTML = '"Break their bones, skin their pelt. You will suffer as they have suffered."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/2.jpg)";
			break;
		case 3:
			law.innerHTML = '"No wicked deed goes unseen."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/3.jpg)";
			break;
		case 4:
			law.innerHTML = '"Be mindful when you hear whispers on the waves."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/4.jpg)";
			break;
		case 5:
			law.innerHTML = '"Do not let your children stray, or the Lijikin will come out to play."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/5.jpg)";
			break;
		case 6:
			law.innerHTML = '"It\'s time to leave when the silence arrives, if you want to make it out alive."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/6.jpg)";
			break;
		case 7:
			law.innerHTML = '"Test not the wrath of the headless plague."';
			bg.style.backgroundImage = "url(assets/images/indexSplash/7.jpg)";
			break;
	}
}
