const variantNumber = 98;
const targetIndex = (variantNumber % 10) + 1;

const imageContainer = document.querySelector("a");

function addImage() {
    const newImage = document.createElement("img");
    newImage.src = "https://bessarabiainform.com/wp-content/uploads/2024/07/6390f6b6b137e.jpeg";
    newImage.alt = "Photo of Odesa";
    newImage.style.width = "720px";
    newImage.style.height = "450px";

    imageContainer.appendChild(newImage);
}

function increaseImage() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        const setWidth = parseInt(img.style.width) || img.width;
        const setHeight = parseInt(img.style.height) || img.height;
        img.style.width = (setWidth + 25) + 'px';
        img.style.height = (setHeight + 25) + 'px';
    });
}

function decreaseImage() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        const currentWidth = parseInt(img.style.width) || img.width;
        const currentHeight = parseInt(img.style.height) || img.height;
        img.style.width = (currentWidth - 25) + 'px';
        img.style.height = (currentHeight - 25) + 'px';
    });
}

function deleteImage() {
    const images = document.querySelectorAll("img");
    if (images.length > 0) {
        images[images.length - 1].remove();
    } 
}