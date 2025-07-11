document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send the form data to Formspree
    fetch('https://formspree.io/f/xyzjrbaz', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        form.reset();
      } else {
        alert('Oops! There was a problem sending your message.');
      }
    })
    .catch(error => {
      alert('There was an error submitting the form. Please try again later.');
      console.error(error);
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // change icon to 'x' on click (optional)
    navbar.classList.toggle('active'); // show/hide nav menu
  });
});
