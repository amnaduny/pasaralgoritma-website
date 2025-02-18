// start of modal company profile
// Stop playing video youtube if modal is closed
// get the modal and iframe
// const modal = document.getElementById('play-company-profile');
// const iframe = document.getElementById('company-profile');

// // add an event listener for when the modal is hidden
// modal.addEventListener('hidden.bs.modal', function () {
//     // reset the iframe src to stop the video
//     iframe.src = iframe.src;
// });
// end of modal company profile

// start of scroll navbar
// scroll navbar change background color
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar-section');
    let navbarLinks = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbarLinks.classList.add('scrolled');
        navbarBrand.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        navbarLinks.classList.remove('scrolled');
        navbarBrand.classList.remove('scrolled');
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
// end of navbar

// Remove show when clicking nav-item
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});
// End of remove show

// load navbar to new page
function loadNavbar() {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const navbar = tempDiv.querySelector('#navbar-section');
            
            if (navbar && !document.querySelector('#navbar-section')) { 
                document.body.insertAdjacentHTML('afterbegin', navbar.outerHTML);
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}

window.addEventListener('load', loadNavbar);
// end of load navbar to new page

// video modal testimoni
document.querySelectorAll(".video-card").forEach(card => {
    card.addEventListener("click", function() {
        let videoUrl = this.getAttribute("data-video");
        let videoFrame = document.getElementById("videoFrame");
        videoFrame.src = videoUrl + "?autoplay=1"; // Add autoplay

        let videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
        videoModal.show();
    });
});

document.getElementById("videoModal").addEventListener("hidden.bs.modal", function () {
    document.getElementById("videoFrame").src = ""; // Stop video when modal closes
});
// end of video modal testimoni