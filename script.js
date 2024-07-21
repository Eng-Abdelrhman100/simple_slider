const images = [
    'OIG2.jpeg',
    'OIG3.jpeg',
    'forest-landscape_351x351.jpg'
];

// Initial image index
let currentIndex = 0;

// Get references to the image and buttons
const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to update the image source with animation
function updateImage() {
    imageElement.classList.remove('fade-in');
    void imageElement.offsetWidth; // Trigger reflow to restart animation
    imageElement.classList.add('fade-in');
    imageElement.src = images[currentIndex];
}

// Event listener for the "Prev" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Initialize the image source
updateImage();
