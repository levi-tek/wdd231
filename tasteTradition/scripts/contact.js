document.addEventListener("DOMContentLoaded", function () { const contactForm = document.getElementById("contact-form"); const faqItems = document.querySelectorAll(".faq-item");

    // Form Validation and Submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let isValid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "") {
            alert("Please enter your name.");
            isValid = false;
        }
        if (email === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
        if (message === "") {
            alert("Please enter your message.");
            isValid = false;
        }
        
        if (isValid) {
            alert("Thank you for reaching out! We'll get back to you soon.");
            contactForm.reset();
        }
    });
    
    // FAQ Toggle
    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
            const answer = this.querySelector(".faq-answer");
            if (this.classList.contains("active")) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
    
    });