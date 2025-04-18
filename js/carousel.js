import { carouselImages } from '/js/data.js';

const carouselInner = document.getElementById('carousel-inner');

// Start with an empty string to hold all the carousel items
let carouselItemsHTML = '';

// Create an array to hold promises for each image to preload
const preloadImages = carouselImages.map(image => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.img;
        img.onload = resolve;  // Resolve when the image is loaded
        img.onerror = reject;  // Reject if there's an error loading the image
    });
});

// Once all images are preloaded, build the carousel
Promise.all(preloadImages)
    .then(() => {
        // Loop through the images and build the HTML string
        carouselImages.forEach((image, index) => {
            carouselItemsHTML += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${image.img}" class="d-block w-100" alt="${image.alt}" ${index === 0 ? 'decoding="async" fetchpriority="high"' : 'loading="lazy"'}> 
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h1>Welcome to Chema Selecto Pork Skins</h1>
                        <p class="lead text-white text-shadow mb-2">Premium pork and beef products trusted by chefs and butchers nationwide.</p>
                        <a href="/contact.html" class="btn btn-danger">Contact Us</a>
                    </div>
                </div>
            `;
        });

        // Insert the carousel items into the carousel-inner
        carouselInner.innerHTML = carouselItemsHTML;
    })
    .catch(err => {
        console.error("Error loading images:", err);
        // Handle image loading failure if necessary
    });