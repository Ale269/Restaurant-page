import displayHome from "./home.js";
import displayMenu from "./menu.js";
import './style.css';
import background from "./background-site.png";

let externalContainer = document.querySelector(".image-background");
externalContainer.style.cssText = `background-image: url("${background}");
background-size: 100%;
background-attachment: fixed;
background-repeat: no-repeat;`


displayHome();

const content = document.getElementById("content");

const tabButton = document.querySelector("nav");
tabButton.addEventListener("click", (event) => {
    if(event.target.classList.contains("Home")){
        content.innerHTML = "";
        displayHome();
    }else if(event.target.classList.contains("Menu")){
        content.innerHTML = "";
        displayMenu();
    }else if(event.target.classList.contains("Contact")){

    }
    
})