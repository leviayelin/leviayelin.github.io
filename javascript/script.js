//Selectors Section 
//creating variable for show and hide button
const hemburger = document.querySelectorAll(".hamburger");
const showNavbar = document.querySelector(".navbar");
const Header = document.getElementById('header');
const links = document.querySelectorAll('ul .link');
const projectDemo = document.querySelector('#project-demo');


//hiding demo project card - function 
function hideLoading(){
	projectDemo.classList.add("hide");
}


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

fetch(url,{
	method:'GET',
	type:'cors',
	status:200,
})
.then(resp => {
	if(!resp.ok){
		throw new Error('an error accure!')
	}
	console.log(resp)
	return resp.json()
})
.then(data => {
		hideLoading();	
		let card = data.project;
		console.log(card)
		console.log(data)
		card.forEach((item,id) =>{
			item = `
				<div class="project">
					<div class="image-container">
						<img src="${item.image}">
					</div>
					<div class="project-content">
						<h2 class="project-title">${item.title}</h2>
						<p class="content">${item.content}</p>
						<a href="#">show project</a>
					</div>
				</div>
		`
		document.querySelector('.projects-container').innerHTML += item;
		})
  }).catch(err => console.log(err))

// fetchProjects();