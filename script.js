let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};


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