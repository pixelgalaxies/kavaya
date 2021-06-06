const genNav = `
	
		<nav class="navbar">
			<div class="nav-icon">
				<i class="fas fa-bars nav-icon--menu"></i>
				<i class="fas fa-times nav-icon--close"></i>
			</div>
			<a href="#" class="nav-logo">Tales Of Kavaya</a>
			<ul class="nav-list">
				<li><a href="about.html">About</a></li>
				<li><a href="characters.html">Characters</a></li>
				<li><a href="chronicles.html">Chronicles</a></li>
				<li><a href="world.html">World</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</nav>
	

`;

document.querySelector("header").innerHTML = genNav;