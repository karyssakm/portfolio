let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};


//read more button for career
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const current = event.target;
        const currentText = current.parentNode.querySelector('.read-more-text');

        currentText.classList.toggle('read-more-text--show');
        current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const readMoreText = this.previousElementSibling;
            readMoreText.classList.toggle('read-more-text--show');
            this.textContent = readMoreText.classList.contains('read-more-text--show') ? 'Read Less...' : 'Read More...';
        });
    });
});



//read more button for the about me and include the popout
document.addEventListener('DOMContentLoaded', function () {
    const aboutMeReadMoreBtn = document.getElementById('about-read-more-btn');
    const popupBox = document.getElementById('popup-box');
    const popupCloseBtn = document.getElementById('popup-close-btn');

    // "Read More" for About Me triggers the popout
    if (aboutMeReadMoreBtn) {
        aboutMeReadMoreBtn.addEventListener('click', function () {
            popupBox.style.visibility = 'visible';
            popupBox.style.opacity = '1'; // Show popout
        });
    }

    // Close the popout when the "Close" button is clicked
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', function () {
            popupBox.style.visibility = 'hidden';
            popupBox.style.opacity = '0'; // Hide popout
        });
    }
});
