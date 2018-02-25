function generateLaw(){
	const law = document.querySelector(".law");
	const bg = document.querySelector(".container");
	var random = Math.floor((Math.random() * 5) + 1);
	
	switch(random) {
		case 1:
			law.innerHTML = '"For what is borrowed, must always be repaid."';
			bg.style.backgroundImage = "url(images/indexSplash/1.jpg)";
			break;
		case 2:
			law.innerHTML = '"Break their bones, skin their pelt. You will suffer as they have suffered."';
			bg.style.backgroundImage = "url(images/indexSplash/2.jpg)";
			break;
		case 3:
			law.innerHTML = '"No wicked deed goes unseen."';
			bg.style.backgroundImage = "url(images/indexSplash/3.jpg)";
			break;
		case 4:
			law.innerHTML = '"Be mindful when you hear whispers on the waves."';
			bg.style.backgroundImage = "url(images/indexSplash/4.jpg)";
			break;
		case 5:
			law.innerHTML = '"Do not let your children stray, or the Lijikin will come out to play."';
			bg.style.backgroundImage = "url(images/indexSplash/5.jpg)";
			break;
	}
}
