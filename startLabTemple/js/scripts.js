import {temples} from "../data/temples";
console.log(temples)

import { url } from "../data/temples";
console.log(url)



const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const title = document.querySelector("#title");
const close = document.querySelector("#close");
const info = document.querySelector("#info");


close.addEventListener("click", () => {
    mydialog.close();
});

function displayItems(data){
    data.forEach(x => {
        const photo = document.createElement("img");
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        photo.addEventListener("click", () => showStuff(x));
    
        showHere.appendChild(photo);
    });
    
    

}
displayItems(temples)

function showStuff(x) {
    title.innerHTML = x.name
    mydialog.showModal()
}