document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload on form submission
    alert("Thank you for reaching out, " + document.getElementById("name").value + "! I will get back to you soon.");
});
