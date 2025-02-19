// navigation
const navLinks = document.querySelector("#nav-menu");
const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
});


// dropdown
function toggleDropdown(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const dropdown = document.getElementById("recipeDropdown");
  const icon = event.currentTarget.querySelector("i");

  dropdown.classList.toggle("show");
  icon.classList.toggle("rotate");
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.querySelector(".dropbtn");
  dropdownBtn.addEventListener("click", toggleDropdown);
});




// Get all flip cards that trigger the modal
document.querySelectorAll('.flip').forEach(function(card) {
  card.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Get all close buttons for each modal
document.querySelectorAll('.close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});










// JavaScript for dropdown functionality in mobile view
document.addEventListener("DOMContentLoaded", function () {
  const footerSections = document.querySelectorAll(".footer-section h4");
  
  footerSections.forEach(function (section) {
      section.addEventListener("click", function () {
          const ul = section.nextElementSibling;
          if (ul.style.display === "block") {
              ul.style.display = "none";
          } else {
              ul.style.display = "block";
          }
      });
  });
});




document.getElementById("year").textContent = new Date().getFullYear();