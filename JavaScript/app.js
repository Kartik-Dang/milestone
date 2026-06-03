let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;
let cycleCount = 0; // To keep track of how many cycles have been completed

nextBtn.onclick = () => {
    if (active < lastPosition) {
        active++;
    } else {
        redirectToHomepage();
    }
    setSlider();
};

prevBtn.onclick = () => {
    if (active > firstPosition) {
        active--;
    }
    setSlider();
};

const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if (oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if (active == lastPosition) nextBtn.classList.add('d-none');
    if (active == firstPosition) prevBtn.classList.add('d-none');
};

// Automatic sliding with a 3-second interval
const slideInterval = setInterval(() => {
    if (active < lastPosition) {
        active++;
        setSlider();
    } else {
        clearInterval(slideInterval); // Stop the interval
        redirectToHomepage();
    }
}, 3000); // 3000 milliseconds = 3 seconds

const redirectToHomepage = () => {
    window.location.href = 'Pages/home.html'; // Redirect to the homepage
};

setSlider();

// Set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
};
setDiameter();

window.addEventListener('resize', () => {
    setDiameter();
});
