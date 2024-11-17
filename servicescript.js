let serviceCurrentSlide = 0;
let servicePcurrentSlide = 0;

function moveServiceSlide(direction) {
    const serviceSlides = document.querySelector('.service-slides');
    const serviceTotalSlides = document.querySelectorAll('.service-slide').length;
    
    serviceCurrentSlide += direction;
    
    if (serviceCurrentSlide < 0) {
        serviceCurrentSlide = serviceTotalSlides - 1;
    } else if (serviceCurrentSlide >= serviceTotalSlides) {
        serviceCurrentSlide = 0;
    }

    const serviceSlideWidth = serviceSlides.querySelector('.service-slide').clientWidth;
    serviceSlides.style.transform = `translateX(-${serviceCurrentSlide * serviceSlideWidth}px)`;

    const servicePslides = document.querySelector('.service-p-slides');
    const servicePtotalSlides = document.querySelectorAll('.service-p-slide').length;
    
    servicePcurrentSlide += direction;
    
    if (servicePcurrentSlide < 0) {
        servicePcurrentSlide = servicePtotalSlides - 1;
    } else if (servicePcurrentSlide >= servicePtotalSlides) {
        servicePcurrentSlide = 0;
    }

    const servicePslideWidth = servicePslides.querySelector('.service-p-slide').clientWidth;
    servicePslides.style.transform = `translateX(-${servicePcurrentSlide * servicePslideWidth}px)`;
}
