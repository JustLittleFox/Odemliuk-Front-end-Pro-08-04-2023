const images = ["./img/image1.jpg", "./img/image2.jpg", "./img/image3.jpg"];
let currentIndex = 0;

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageElement = document.querySelector('.slider-image');

function showImage(index) {
    imageElement.src = images[index];

    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (index === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
});

showImage(currentIndex);