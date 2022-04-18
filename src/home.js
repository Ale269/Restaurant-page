import './style.css';
import logoSrc from "./logo.svg"
import background from './background.png';

export default function displayHome() {
    document.querySelectorAll(".tab-navigation").forEach((element) => {
        if(element.firstChild.classList.contains("Home")){
            element.firstChild.classList.add("active");
        }else{
            if(element.firstChild.classList.contains("active")){
                element.firstChild.classList.remove("active");
            }
        }
    })

    const logo = new Image();
    logo.src = logoSrc;
    logo.classList.add("logo-home");
    
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    titleContainer.innerHTML = `<h1 class="title">C'è pasta per tutti</h1><h3>We have been serving traditional recipes, made with local ingredients, since 1939.</h3>`;
    titleContainer.prepend(logo);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-menu-container");

    const menuCTA = document.createElement("div");
    menuCTA.classList.add("image-container-cta");

    const homeBackground = new Image();
    homeBackground.src = background;
    homeBackground.classList.add("background-image");
    menuCTA.append(homeBackground);

    imageContainer.append(menuCTA);

    document.getElementById("content").append(homeContainer);
    homeContainer.append(titleContainer);
    titleContainer.after(imageContainer);
}