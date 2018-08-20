const genNav =	`
	<div class="s-header">
		<div class="title-bar">
			<h1 class="s-title">Tales of Kavaya</h1>
			<img onclick="menuOpen()" class="menu-icon" src="assets/images/icons/menu.svg" alt="">
			<img onclick="menuClose()" class="x-icon" src="assets/images/icons/x.svg" alt="">
		</div>
		<div class="s-nav">
			<ul>
				<li><a href="about.html">About</a></li>
				<li><a href="characters.html">Characters</a></li>
				<li><a href="chronicles.html">Chronicles</a></li>
				<li><a href="pronunciation.html">Pronunciation</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</div>
	</div>
               
      <div class="m-header">
         <h1 class="m-title">Tales of Kavaya</h1>
         <div class="m-nav">
            <ul>
               <li><a href="about.html">About</a></li>
               <li><a href="characters.html">Characters</a></li>
               <li><a href="chronicles.html">Chronicles</a></li>
               <li><a href="pronunciation.html">Pronunciation</a></li>
               <li><a href="contact.html">Contact</a></li>
            </ul>
         </div>
		</div>
`;

document.querySelector(".header").innerHTML = genNav;