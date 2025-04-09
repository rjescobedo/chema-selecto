import { carouselImages } from '/js/data.js';

const carouselInner = document.getElementById('carousel-inner');
const welcomeSection = document.getElementById('welcomeSection'); // Make sure your section has this ID
let carouselItemsHTML = '';

// Preload all carousel images
const preloadImages = carouselImages.map(image => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.img;
        img.onload = resolve;
        img.onerror = () => {
            console.warn(`Failed to preload image: ${image.img}`);
            resolve(); // Continue loading even if one image fails
        };
    });
});

// Build and display the carousel after all images are ready
Promise.all(preloadImages)
    .then(() => {
        carouselImages.forEach((image, index) => {
            carouselItemsHTML += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${image.img}" class="d-block w-100" alt="${image.alt}" 
                        ${index === 0 ? 'decoding="async" fetchpriority="high"' : 'loading="lazy"'}> 
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2>${image.title}</h2>
                        <a href="/contact.html" class="btn btn-danger">Contact Us</a>
                    </div>
                </div>
            `;
        });

        carouselInner.innerHTML = carouselItemsHTML;

        // ✅ Reveal the welcome section now that the carousel is ready
        if (welcomeSection) {
            welcomeSection.classList.remove('hidden');
        }
    })
    .catch(err => {
        console.error("Error loading carousel images:", err);

        // Fallback: still reveal welcome section so user can browse
        if (welcomeSection) {
            welcomeSection.classList.remove('hidden');
        }
    });