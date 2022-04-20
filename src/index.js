import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayContact from "./contact.js";
import './style.css';
import background from "./background-site.png";
import faviconHref from "./favicon.png";

let externalContainer = document.querySelector(".image-background");
externalContainer.style.cssText = `background-image: url("${background}");
background-size: 100%;
background-attachment: fixed;
background-repeat: no-repeat;`

const link = document.createElement("link");
link.type = "image/x-icon";
link.rel = "icon";
link.href = faviconHref;

document.head.appendChild(link);

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
        content.innerHTML = "";
        displayContact();
    }
    
})

let MenuCTAimage = document.querySelector(".image-menu-container");
MenuCTAimage.addEventListener("click", () => {
    displayMenu();
})