// Stop playing video youtube if modal is closed
// get the modal and iframe
const modal = document.getElementById('play-company-profile');
const iframe = document.getElementById('company-profile');

// add an event listener for when the modal is hidden
modal.addEventListener('hidden.bs.modal', function () {
    // reset the iframe src to stop the video
    iframe.src = iframe.src;
});

// scroll navbar change background color
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar-section'); 
    
    // Langsung cek apakah ada scroll 
    if (window.scrollY > 0) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// scroll navbar text change color
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});