const variantNumber = 98;
const calculatedVariant = (variantNumber % 10) + 1;

const firstElement = document.getElementById('firstElement');
const secondElement = document.querySelector('#secondElement');

let isFirstClicked = true;

firstElement.addEventListener('click', function (e) {
    if (isFirstClicked){
        isFirstClicked = false;
        firstElement.style.backgroundColor = 'lightblue';
        firstElement.style.color = 'black';
    }
    else
        swapColors(firstElement,secondElement);
})

let isSecondClicked = true;

secondElement.addEventListener('click', function (e) {
    if (isSecondClicked){
        isSecondClicked = false;
        secondElement.style.backgroundColor = 'coral';
        secondElement.style.color = 'white';
    }
    else
        swapColors(firstElement,secondElement);
})

function swapColors (firstElement, secondElement) {
    const middleBackgroundColor = firstElement.style.backgroundColor;
    const middleTextColor = firstElement.style.color;
    firstElement.style.backgroundColor = secondElement.style.backgroundColor;
    firstElement.style.color = secondElement.style.color;
    secondElement.style.backgroundColor = middleBackgroundColor;
    secondElement.style.color = middleTextColor;
}

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
        const setWidth = parseInt(img.style.width) || img.width;
        const setHeight = parseInt(img.style.height) || img.height;
        img.style.width = (setWidth - 25) + 'px';
        img.style.height = (setHeight - 25) + 'px';
    });
}

function deleteImage() {
    const images = document.querySelectorAll("img");
    if (images.length > 0) {
        images[images.length - 1].remove();
    } 
}