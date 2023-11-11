import './style.css';

let slideIndex = 0;

function next() {
    let slides = document.getElementsByClassName("slide");
    slideIndex++;
    // Wrap back to 0 if out of bounds right
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    navigate(slideIndex);
}

function previous() {
    let slides = document.getElementsByClassName("slide");
    slideIndex--;
    // Wrap back to slidelength - 1 if out of bounds left
    if (slideIndex === -1) {
        slideIndex = slides.length - 1;
    }
    navigate(slideIndex);
}

function populateDots() {
    // Get the length of the slides, then create new dots through looping
    let slides = document.getElementsByClassName("slide");
    let nav = document.getElementsByClassName('nav')[0];
    for (let x = 0; x < slides.length; x++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');

        dot.addEventListener('click', function() {
            navigate(x);
        })

        nav.appendChild(dot);
    }
}

function navigate(slideIndex) {
    let slides = document.getElementsByClassName("slide");
    //  Hide every slide, then make the currently indexed slide appear
    for (let x = 0; x < slides.length; x++) {
        let slide = slides[x];

        if (!slide.classList.contains('hidden')) {
            slide.classList.add('hidden');
        }
    }
    slides[slideIndex].classList.remove('hidden');

    // Deselect every dot, then select dot with the index
    let dots = document.getElementsByClassName('dot');
    for (let x = 0; x < slides.length; x++) {
        let dot = dots[x];

        if (!dot.classList.contains('deselected')) {
            dot.classList.add('deselected');
        }
    }
    dots[slideIndex].classList.remove('deselected');
}

const nextButton = document.getElementById('right-arrow');
nextButton.addEventListener('click', next)

const prevButton = document.getElementById('left-arrow');
prevButton.addEventListener('click', previous)

function autoSlide() {
    next()
    setTimeout(autoSlide, 5000);
}

// autoSlide();
populateDots();
navigate(0);
autoSlide();