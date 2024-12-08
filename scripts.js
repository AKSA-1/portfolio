// scripts.js

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields before submitting.");