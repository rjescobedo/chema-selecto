
//Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

//Google Map
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("map-frame").src = "https://www.google.com/maps/embed/v1/place?q=7220+Ave+F,+Houston,+TX+77011&key=AIzaSyAdWe73jv1beqQH6DVNoJouUS08ndIktU8";
    }, 100); // Loads slightly after DOMContentLoaded
});

