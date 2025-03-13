// start of ad modal
document.addEventListener("DOMContentLoaded", function () {
    let modal = new bootstrap.Modal(document.getElementById("adModal"));
    let mainContent = document.getElementById("mainContent");
    let adImage = document.getElementById("adImage");
    let closeModal = document.getElementById("closeModal");

    // Show modal properly (Bootstrap handles the backdrop)
    modal.show();

    function hideModal() {
        modal.hide(); // Use Bootstrap's modal hide method
        mainContent.style.display = "block";
    }

    // Close modal when clicking outside the image or pressing the close button
    document.getElementById("adModal").addEventListener("click", function (event) {
        if (event.target !== adImage && !adImage.contains(event.target) || event.target === closeModal) {
            hideModal();
        }
    });

    // Ensure backdrop is removed when modal is hidden
    document.getElementById("adModal").addEventListener("hidden.bs.modal", function () {
        document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.remove());
    });
});

// end of ad modal

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

// Validate data input form
// document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let phone = document.getElementById("phone").value.trim();
//     let course = document.getElementById("course").value;

//     let namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
//     let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let phonePattern = /^[0-9]*$/; // Only numbers

//     if (!namePattern.test(name)) {
//         alert("Nama tidak boleh mengandung angka atau karakter khusus!");
//         return;
//     }

//     if (!emailPattern.test(email)) {
//         alert("Masukkan alamat email yang valid!");
//         return;
//     }

//     if (phone !== "" && !phonePattern.test(phone)) {
//         alert("Nomor telepon hanya boleh berisi angka!");
//         return;
//     }

//     if (course === "") {
//         alert("Silakan pilih program kursus!");
//         return;
//     }

//     // Create a JSON object with the form data
//     let formData = {
//         name: name,
//         email: email,
//         phone: phone,
//         course: course
//     };

//     // Log the JSON object to the console (you can replace this with saving to a server or local storage)
//     console.log("Form Data in JSON format: ", JSON.stringify(formData));

//     // Optionally, save the data in Local Storage (if you don't want to lose it after refresh)
//     localStorage.setItem("formData", JSON.stringify(formData));

//     alert("Formulir berhasil dikirim!");
//     this.submit(); // Submit the form if all validations pass
// });
// End of validate data input form

// Start of Testimoni Clicked
document.querySelectorAll('label[for^="c"]').forEach(label => {
    label.addEventListener('click', function() {
        let checkboxId = this.getAttribute('for'); // Get the associated checkbox ID
        let checkbox = document.getElementById(checkboxId);

        if (checkbox.checked) {
            let videoUrls = {
                'c1': 'assets/testimoni-section/jackson-web.mp4',
                'c2': 'assets/testimoni-section/evita-web.mp4',
                'c3': 'assets/testimoni-section/benedicta-web.mp4',
                'c4': 'assets/testimoni-section/kayla-web.mp4',
                'c5': 'assets/testimoni-section/putu-web.mp4',
                'c6': 'assets/testimoni-section/wandi-web.mp4'
            };

            let videoUrl = videoUrls[checkboxId]; // Get the corresponding video URL
            document.getElementById('videoFrame').src = videoUrl;

            let modal = new bootstrap.Modal(document.getElementById('videoModal'));
            modal.show();
        }
    });
});

// End of Testimoni Clicked
