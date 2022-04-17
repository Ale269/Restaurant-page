import './style.css';
import formaggio from './pasta-formaggio.png';
import gnocchi from './gnocchi-pesto.png';
import pesce from './pasta-pesce.png';
import rustica from './pasta-rustica.png';
import salsiccia from './pasta-salsiccia.png';
import verde from './pasta-verde.png';
import ragu from './tagliatelle-ragu.png';
import tRustiche from './tagliatelle-rustiche.png';


export default function displayMenu() {
    document.querySelectorAll(".tab-navigation").forEach((element) => {
        if(element.firstChild.classList.contains("Menu")){
            element.firstChild.classList.add("active");
        }else{
            if(element.firstChild.classList.contains("active")){
                element.firstChild.classList.remove("active");
            }
        }
    })

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container-menu");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    titleContainer.classList.add("title-menu");
    titleContainer.innerHTML = `<h1>Menu</h1><h3>Choose the tradition.</h3>`;

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");




    const PastaFormaggio = new Image();
    PastaFormaggio.src = formaggio;

    const Gnocchi = new Image();
    Gnocchi.src = gnocchi;

    const PastaPesce = new Image();
    PastaPesce.src = pesce;

    const PastaRustica = new Image();
    PastaRustica.src = rustica;

    const PastaSalsiccia = new Image();
    PastaSalsiccia.src = salsiccia;

    const PastaVerde = new Image();
    PastaVerde.src = verde;

    const TagliatelleRagu = new Image();
    TagliatelleRagu.src = ragu;

    const TagliatelleRustiche = new Image();
    TagliatelleRustiche.src = tRustiche;





    const photoArr = [PastaFormaggio, Gnocchi, PastaPesce, PastaRustica, PastaSalsiccia, PastaVerde, TagliatelleRagu, TagliatelleRustiche];
    const descriptionArr = [
        "Excellent pasta made with a mix of fine cheeses from the area.",
        "Potato dumplings made the same day they are served.",
        "Pasta made with fresh ingredients and excellent fish.",
        "Rustic pasta of ancient traditions, for those who want to rediscover past flavors.",
        "Rich and tasty pasta, for those who want to indulge themselves.",
        "Vegan pasta, made with organic and local ingredients.",
        "Tagliatelle topped with a meat and tomato sauce, one of the most popular recipes.",
        "tagliatelle with rustic sauce, an excellent variant for those who like a more consistent pasta."
    ]

    for(let i=0; i<8; i++){
        const menuElement = document.createElement("div");
        menuElement.classList.add("menu-element-container");

        const photo = photoArr[i];
        photo.classList.add("menu-image");

        const description = document.createElement("p")
        description.classList.add("element-description")
        description.textContent = descriptionArr[i];

        menuContainer.append(menuElement);
        menuElement.append(photo);
        photo.after(description);
    }

    document.getElementById("content").append(homeContainer);
    homeContainer.append(titleContainer);
    titleContainer.after(menuContainer);
}

