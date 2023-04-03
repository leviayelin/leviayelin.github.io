//Selectors Section 
//creating variable for show and hide button
const hemburger = document.querySelectorAll(".hamburger");
const showNavbar = document.querySelector(".navbar");

//Functions Section
function navToggle(){
//toggle between the navbar hide and show	
	showNavbar.classList.toggle("show");
}

//Event Listener Section
for(let i = 0 ; i < hemburger.length; i++){
// useing "for" loop that will able me to 
//use the button as much as needed 	
hemburger[i].addEventListener("click",navToggle);
}




