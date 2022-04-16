import displayHome from "./home.js";
import './style.css';
import background from "./background-site.png";

let body = document.querySelector("body");
body.style.cssText = `background-image: url("${background}");
background-size: 100%;
background-attachment: fixed;`
displayHome();