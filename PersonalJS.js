document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').innerText = `Thank you, ${name}! Your message has been sent.`;
        this.reset();
    } else {
        document.getElementById('formResponse').innerText = 'Please fill in all fields.';
    }
});
