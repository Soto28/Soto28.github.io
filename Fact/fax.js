// change the visibility of divId
function changeVisibility(divId){
	let elem = document.getElementById(divId);
	
	// if elem exist, it is considered true
	if(elem) {
		elem.className = (elem.className == 'hidden')? 'unhidden' : 'hidden';
	} // if
} // changeVisibility

function facts() {
	let bigImage = document.getElementById("bigImage");
	let image = new Image(); // new image object
	
	// update the big image to access
	image.src = "images/" + imageFile;
	
	// force big image to prekiad so we can access width
	// to center image on page
	image.onload = function (){
		let width = image.width;
		document.getElementById("boundaryBigImage").style.width = width + "px";
	};
	
	bigImage.src = image.src;
	bigImage.alt = alt;
	
	changeVisibility("lightbox");
	changeVisibility("positionBigImage");
		

} // displayLightBox