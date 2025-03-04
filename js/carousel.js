import { carouselImages } from '/js/data.js';

const carouselInner = document.getElementById('carousel-inner');

carouselInner.innerHTML = '';

carouselImages.forEach((image, index) => {
    carouselInner.innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image.img}" class="d-block w-100" alt="${image.alt}">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h5>${image.title}</h5>
                <p>${image.description}</p>
                <a href="/contact.html" class="btn btn-danger">Contact Me</a>
            </div>
        </div>
    `;
});