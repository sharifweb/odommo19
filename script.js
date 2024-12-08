document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Validation
    if (name === "" || email === "" || message === "") {
        showResponseMessage("All fields are required!", "error");
    } else {
        showResponseMessage("Thank you for your message! We'll get back to you soon.", "success");
        
        // Optionally, you can reset the form after successful submission
        document.getElementById("contactForm").reset();
    }
});

// Function to display the response message
function showResponseMessage(message, type) {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = message;
    
    // Add the appropriate class for success or error
    responseMessage.className = type === "success" ? "response-message" : "response-message error";
}
