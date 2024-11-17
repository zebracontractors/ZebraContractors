let aboutCurrentSlide = 0;
let aboutPcurrentSlide = 0;

function moveAboutSlide(direction) {
    const aboutSlides = document.querySelector('.about-slides');
    const aboutTotalSlides = document.querySelectorAll('.about-slide').length;
    
    aboutCurrentSlide += direction;
    
    if (aboutCurrentSlide < 0) {
        aboutCurrentSlide = aboutTotalSlides - 1;
    } else if (aboutCurrentSlide >= aboutTotalSlides) {
        aboutCurrentSlide = 0;
    }

    const aboutSlideWidth = aboutSlides.querySelector('.about-slide').clientWidth;
    aboutSlides.style.transform = `translateX(-${aboutCurrentSlide * aboutSlideWidth}px)`;

    const aboutPslides = document.querySelector('.about-p-slides');
    const aboutPtotalSlides = document.querySelectorAll('.about-p-slide').length;
    
    aboutPcurrentSlide += direction;
    
    if (aboutPcurrentSlide < 0) {
        aboutPcurrentSlide = aboutPtotalSlides - 1;
    } else if (aboutPcurrentSlide >= aboutPtotalSlides) {
        aboutPcurrentSlide = 0;
    }

    const aboutPslideWidth = aboutPslides.querySelector('.about-p-slide').clientWidth;
    aboutPslides.style.transform = `translateX(-${aboutPcurrentSlide * aboutPslideWidth}px)`;
}
