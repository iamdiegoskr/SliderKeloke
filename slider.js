const slider = document.querySelector('#slider');
const sliderSections = document.querySelectorAll('.slider__section');
const sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnRigth = document.querySelector('#btn-slider-rigth');
const btnLeft = document.querySelector('#btn-slider-left');


slider.insertAdjacentElement('afterbegin', sliderSectionLast) //El ultimo sliderSection al principio del slider

function nextBanner() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];

    slider.style.marginLeft = '-200%'
    slider.style.transition = 'all .8s'

    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = '-100%'
    }, 800);


}

function previousBanner() {
    let sliderSections = document.querySelectorAll('.slider__section')
    let sliderSectionLast = sliderSections[sliderSections.length - 1]


    slider.style.marginLeft = '0%'
    slider.style.transition = 'all .8s'

    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%'
    }, 800);
}


btnRigth.addEventListener('click', nextBanner)
btnLeft.addEventListener('click', previousBanner)


setInterval(() => {
    nextBanner()
}, 5000);