import { reviews } from "./data.js";

const reviewContainer = document.getElementById("review-container");
let currentIndex = 0;

// Function to render a single review with fade effect
function renderReview(index) {
    const review = reviews[index];

    // Apply fade-out effect
    reviewContainer.classList.remove("fade-in");
    reviewContainer.classList.add("fade-out");

    setTimeout(() => {
        reviewContainer.innerHTML = `
            <div class="review-card">
                <h4>${review.name}</h4>
                <div class="stars">${generateStars(review.rating)}</div>
                <p class="comment">"${review.comment}"</p>
                <small class="date">${review.source}</small>
            </div>
        `;

        // Apply fade-in effect after content changes
        reviewContainer.classList.remove("fade-out");
        reviewContainer.classList.add("fade-in");
    }, 400); // Slight delay for smoother transition
}

// Function to generate star icons
function generateStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Auto-switch reviews every 5 seconds
function startReviewCarousel() {
    renderReview(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % reviews.length;
        renderReview(currentIndex);
    }, 10000);
}

// Start the review carousel when the page loads
document.addEventListener("DOMContentLoaded", startReviewCarousel);