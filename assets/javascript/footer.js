let d = new Date();
let year = (d.getFullYear());
					
		
const genFooter = `
	<p>&copy; Karen Crizzle Balboa, Jamiely Hidaro, Dustin Clark 2016 - ${year}</p>
`;

document.querySelector("footer").innerHTML = genFooter;