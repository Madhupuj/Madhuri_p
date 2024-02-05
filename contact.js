document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form inputs
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If all validations pass, you can proceed with form submission
        // For demonstration purpose, you can log the form data
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can also submit the form to a backend server using AJAX or fetch API
        // Example: sendFormData(name, email, message);
        
        // Clear form inputs after submission
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        alert("Form submitted successfully!");
    });
});

// Function to validate email format
function isValidEmail(email) {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
