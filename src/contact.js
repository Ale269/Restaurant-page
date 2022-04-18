import './style.css';
import map from "./position.png";

export default function displayContact() {
    document.querySelectorAll(".tab-navigation").forEach((element) => {
        if(element.firstChild.classList.contains("Contact")){
            element.firstChild.classList.add("active");
        }else{
            if(element.firstChild.classList.contains("active")){
                element.firstChild.classList.remove("active");
            }
        }
    })

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container-contact");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    titleContainer.classList.add("title-contact");
    titleContainer.innerHTML = `<h1>Contact</h1><h3>Come visit us.</h3>`;

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const telephoneContainer = document.createElement("div");
    telephoneContainer.classList.add("telephone-container");
    telephoneContainer.innerHTML = `<i class="fa-solid fa-phone"></i><h4>0554 998743</h4>`

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("adress-container");
    addressContainer.innerHTML = `<i class="fa-solid fa-location-dot"></i><h4>Via Ignazio Persico, 19 - 13, Rome.</h4>`;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("contact-map-image-container");

    const mapImage = new Image();
    mapImage.src = map;
    mapImage.classList.add("position-image");
    imageContainer.append(mapImage);

    contactContainer.append(telephoneContainer);
    telephoneContainer.after(addressContainer);
    addressContainer.after(imageContainer);
    titleContainer.after(contactContainer);

    document.getElementById("content").append(homeContainer);
    homeContainer.append(titleContainer);
    titleContainer.after(contactContainer);
}