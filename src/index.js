import './style.css';

let slideIndex = 0;

function next() {
    let slides = document.getElementsByClassName("slide");
    for (let x = 0; x < slides.length; x++) {
        let slide = slides[x];
        let nextSlide;

        if (x + 1 == slides.length) {
            nextSlide = slides[0];
        }
        else { nextSlide = slides[x + 1];}

        slideIndex++;

        if (!slide.classList.contains('hidden')) {
            slide.classList.add('hidden');
            nextSlide.classList.remove('hidden');
            break;
        }
    }
}

function previous() {
    let slides = document.getElementsByClassName("slide");
    for (let x = 0; x < slides.length; x++) {
        let slide = slides[x];
        let prevSlide;

        if (x - 1 == -1) {
            prevSlide = slides[slides.length - 1];
        }
        else { prevSlide = slides[x - 1];}

        slideIndex--;

        if (!slide.classList.contains('hidden')) {
            slide.classList.add('hidden');
            prevSlide.classList.remove('hidden');
            break;
        }
    }
}

function populateDots() {
    let slides = document.getElementsByClassName("slide");
    let nav = document.getElementsByClassName('nav')[0];
    console.log('hi');
    for (let x = 0; x < slides.length; x++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        nav.appendChild(dot);
    }
}

const nextButton = document.getElementById('right-arrow');
nextButton.addEventListener('click', next)

const prevButton = document.getElementById('left-arrow');
prevButton.addEventListener('click', previous)

function autoSlide() {
    next()
    setTimeout(autoSlide, 5000);
}

autoSlide();
populateDots();