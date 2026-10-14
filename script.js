
let images = [
    "image1.jpeg",
    "image 2.jpeg",
    "image3.jpeg",
    "image4.jpeg"
];

let index = 0;

function showImage() {
    document.getElementById("slide").src = images[index];
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function previous() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}
