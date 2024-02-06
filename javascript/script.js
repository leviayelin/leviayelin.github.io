//Selectors Section 
//creating variable for show and hide button
const hemburger = document.querySelectorAll(".hamburger");
const showNavbar = document.querySelector(".navbar");
const Header = document.getElementById('header');
const links = document.querySelectorAll('ul .link');


//Functions Section
function navToggle(){
//toggle between the navbar hide and show	
	showNavbar.classList.toggle("show");
}

links.forEach(items => {
	items.addEventListener('click', function(link){
	if(link.target){
		showNavbar.classList.remove('show')
	}
})
})

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

//fetching data from data base
let url = "../database/projects.json";
fetch(url)
.then(resp => resp.json())
.then(data => console.log(data.project))
