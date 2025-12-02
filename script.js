// Menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('.right');

    menu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
// Resume download
document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "resume/Shaurya_kumar_resume.pdf";
    link.download = "Shaurya_kumar_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
//Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
const now = new Date();
  document.getElementById('timestamp').value = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
