
// Background animation
VANTA.NET({
    el: '#index-canvas',
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 0.50,
    color: '#3494e6',
    backgroundColor: '#292e38',
    points: 14.00,
    maxDistance: 20.00,
    spacing: 16.00,
    showDots: false
  })

  VANTA.NET({
    el: '#underConst-canvas',
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 0.50,
    color: '#3494e6',
    backgroundColor: '#292e38',
    points: 13.00,
    maxDistance: 20.00,
    spacing: 20.00,
    showDots: false
  })


window.sr = ScrollReveal();

ScrollOut({
    once: true,
});

// Animations for the COVER
let titleAnim = {
    opacity: 0,
    scale: 0.5,
    easing: 'ease-out',
    duration: 2000
}

let subTitleAnim = {
    opacity: 1,
    distance: '1000px',
    origin: 'left',
    easing: 'ease-out',
    duration: 2200,
    delay: 500
}

let mainBtnAnim = {
    opacity: 0,
    easing: 'ease-out',
    duration: 4000,
    delay: 3000
}

// animations for the WHO AM I article
let enterTitleLeft = {
    easing: 'ease-in-out',
    origin: 'left',
    duration: 1800,
    distance: '1000px',
    mobile: false


}

let enterRightAnim = {
    easing: 'ease-in-out',
    origin: 'right',
    duration: 1200,
    distance: '600px',
    delay: 400,
    mobile: false

}

let enterLeftAnim = {
    easing: 'ease-in-out',
    origin: 'left',
    duration: 1200,
    distance: '600px',
    delay: 400,
    mobile: false

}

let fadeIn = {
    opacity: 0,
    easing: 'ease-out',
    duration: 1500,
    delay: 700,
    mobile: false
}
// animations for the sections


sr.reveal('.cover h1', titleAnim);

sr.reveal('.cover h2', subTitleAnim);

sr.reveal('.cover .mainBtn', mainBtnAnim)

sr.reveal('.whoami h1', enterTitleLeft);

sr.reveal('.text-wrap', enterRightAnim);

sr.reveal('.form', fadeIn);

sr.reveal('footer', fadeIn);

sr.reveal('.light-bg', fadeIn);

sr.reveal('.under-const', fadeIn)

// Alterar as animações consoante a media query
function toggleDeskMob() {
    if (window.matchMedia('(min-width: 700px').matches) {

        sr.reveal('.proj-card:nth-child(2)', enterRightAnim);
        sr.reveal('.proj-card:nth-child(4)', enterRightAnim);
        sr.reveal('.proj-card:nth-child(1)', enterLeftAnim);
        sr.reveal('.proj-card:nth-child(3)', enterLeftAnim);

    } else {
               
    }
}

toggleDeskMob();
