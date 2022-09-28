

let images = ['slide2.jpg', 'slide3.jpg', 'slide4.jpeg', 'slide5.jpg', 'slide1.jpg'];

let g = 0;

function slide() {
    document.getElementById('slides').src = images[g];
    if (g < images.length - 1) {
        g++;
    }
    else {
        g = 0;
    }

}
setInterval(slide, 4000)