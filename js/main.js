



const bar = document.querySelector('.bar');



let slideBar = {
        origin: 'left',
        duration: 3000,
        easing: 'ease-out',
        interval: 300,
        distance: bar.style.width

    }

console.log(slideBar.distance);
ScrollReveal().reveal(bar, slideBar)

console.log(ScrollReveal().version);