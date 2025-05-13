const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

function showImage(index) {
    lightboxImg.src = images[index].src;
    lightbox.classList.add('active');
}

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});



document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const images = document.querySelectorAll(".gallery img");
    let loadedCount = 0;

    images.forEach((img) => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.addEventListener("load", () => {
                loadedCount++;
                checkAllLoaded();
            });
            img.addEventListener("error", () => {
                loadedCount++;
                checkAllLoaded();
            });
        }
    });

    function checkAllLoaded() {
        if (loadedCount === images.length) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    }

    if (loadedCount === images.length) {
        checkAllLoaded();
    }
});
