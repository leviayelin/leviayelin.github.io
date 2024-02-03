//Selectors Section 
//creating variable for show and hide button
const hemburger = document.querySelectorAll(".hamburger");
const showNavbar = document.querySelector(".navbar");
const Header = document.getElementById('header');

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


window.addEventListener('scroll', function(){
	const scrollDown = Header;
	const windowPosition = window.scrollY > 100;
	if(windowPosition){
		scrollDown.style.boxShadow = "0 3px 5px rgba(0,0,0,0.3)"
	}else{
		scrollDown.style.boxShadow = "none";
	}
})
