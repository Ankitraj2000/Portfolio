document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission

    const formMessage = document.getElementById('form-message');
    
    // Simple front-end validation (you need server-side logic for real email)
    const name = this.elements.name.value.trim();
    const email = this.elements.email.value.trim();
    
    if (name && email) {
        formMessage.style.color = 'green';
        formMessage.textContent = `Thank you, ${name}! Your message has been received. I will get back to you soon.`;
        this.reset(); // Clear the form
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all required fields.';
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});