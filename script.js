const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.textContent = "Your message has been sent successfully!";
    contactForm.reset();
  });
}