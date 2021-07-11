
// Background network animation
VANTA.NET({
    el: '#vanta-canvas',
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#3494e6',
    backgroundColor: '#292e38',
    points: 14.00,
    maxDistance: 20.00,
    spacing: 16.00,
    showDots: false
  })


window.sr = ScrollReveal();



// let slideBar = {
       
//         duration: 3000,
//         easing: 'ease-out',
//         interval: 300,
//         distance: bar.style.width

//     }

// console.log(slideBar.distance);
// sr.reveal(bar, slideBar)

// console.log(ScrollReveal().version);

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
    // scale: 0,
    easing: 'ease-out',
    duration: 4000,
    delay: 3000
}

// animations for the sections


sr.reveal('.cover h1', titleAnim);

sr.reveal('.cover h2', subTitleAnim);

sr.reveal('.cover .mainBtn', mainBtnAnim)

