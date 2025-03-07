
//Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

//Google Map
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("map-frame").src = "https://www.google.com/maps/embed/v1/place?q=7220+Ave+F,+Houston,+TX+77011&key=AIzaSyAdWe73jv1beqQH6DVNoJouUS08ndIktU8";
    }, 100); // Loads slightly after DOMContentLoaded
});

//Dark Mode
// Apply the saved theme preference immediately upon page load
(function() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;

    // Check if a theme is saved in localStorage
    if (savedTheme === 'dark') {
        body.classList.add('bg-dark', 'text-light');
        body.classList.remove('bg-light', 'text-dark');
        document.getElementById('sun-icon').style.display = 'none';
        document.getElementById('moon-icon').style.display = 'inline';
    } else {
        body.classList.add('bg-light', 'text-dark');
        body.classList.remove('bg-dark', 'text-light');
        document.getElementById('sun-icon').style.display = 'inline';
        document.getElementById('moon-icon').style.display = 'none';
    }
})();

// Add event listener to the dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Toggle between dark and light modes
    body.classList.toggle('bg-dark');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-light');
    body.classList.toggle('text-dark');

    // Toggle the icon visibility
    sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline' : 'none';
    moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline' : 'none';

    // Save the theme preference immediately after toggling
    if (body.classList.contains('bg-dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});