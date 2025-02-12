import { places } from "./places.mjs";

const cards = document.querySelector(".cards");

function displaycards(places){
    cards.innerHTML = "";

    places.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const slide= document.createElement("div");
        slide.classList.add("slide");

        const image =document.createElement("div");
        image.classList.add("image");


        const paragraphs = document.createElement("div");
        paragraphs.classList.add("paragraphs");




        const title = document.createElement("h2");
        title.textContent = element.name;
        card.appendChild(title);


        const figure = document.createElement("img");
        figure.loading = "lazy";
        figure.src = element.photo_url;
        figure.alt = element.alt;
        image.appendChild(figure);


        const description = document.createElement("p");
        description.classList.add("description")
        description.textContent = element.description;
        paragraphs.appendChild(description);


        const address = document.createElement("p");
        address.classList.add("address")
        address.textContent = element.address;
        paragraphs.appendChild(address);


        const price = document.createElement("p");
        price.classList.add("price")
        price.textContent = element.estimated_cost;
        paragraphs.appendChild(price);



        const button = document.createElement("button");
        button.textContent = "Learn More";


        
        slide.appendChild(image);
        slide.appendChild(paragraphs);

        card.appendChild(slide)
        card.appendChild(button);
        





        cards.appendChild(card) ;    
        
        
    });

}

displaycards(places)



function getLastVisitMessage() {
    const now = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');
    localStorage.setItem('lastVisit', now);

    if (!lastVisit) {
      return "Welcome! Let us know if you have any questions.";
    }

    const elapsedTime = now - lastVisit;
    const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    if (elapsedTime < 1000 * 60 * 60 * 24) {
      return "Back so soon! Awesome!";
    } else if (elapsedDays === 1) {
      return "You last visited 1 day ago.";
    } else {
      return `You last visited ${elapsedDays} days ago.`;
    }
  }

  function showOverlayMessage() {
    const message = getLastVisitMessage();
    const overlay = document.getElementById('overlay');
    const messageText = document.getElementById('messageText');
    const closeBtn = document.getElementById('closeBtn');

    messageText.innerText = message;
    overlay.style.display = 'flex';

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  }

  document.addEventListener('DOMContentLoaded', showOverlayMessage);