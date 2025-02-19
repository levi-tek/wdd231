
    // Wait for the DOM to fully load before running the script
    document.addEventListener("DOMContentLoaded", function() {
        
        // Get the form and the submit button
        const form = document.querySelector('form');
        const submitButton = document.querySelector('button[type="submit"]');
        
        // Event listener for form submission
        form.addEventListener("submit", function(event) {
            // Prevent the form from submitting to allow for validation
            event.preventDefault();

            // Get the values of the form fields
            const recipeName = document.getElementById("recipeName").value;
            const ingredients = document.getElementById("ingredients").value;
            const instructions = document.getElementById("instructions").value;

            // Basic validation: check if required fields are filled
            if (!recipeName || !ingredients || !instructions) {
                alert("Please fill in all the required fields: Recipe Name, Ingredients, and Instructions.");
                return; // Stop the submission process if validation fails
            }

            // If validation is successful, display a confirmation message
            alert("Thank you for submitting your recipe! We will review it shortly.");
            
            // Optionally, you can reset the form after successful submission
            form.reset();

            // To simulate submitting the form (in a real case, use AJAX or server-side handling)
            // form.submit();
        });

        // Optional: Provide a confirmation message when the user clicks the submit button
        submitButton.addEventListener("click", function() {
            submitButton.disabled = true; // Disable the button to prevent multiple submissions
            submitButton.innerText = "Submitting..."; // Change button text to indicate action
        });
    });