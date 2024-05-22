let tl = gsap.timeline();

tl.from('nav h1, .links button, .links a', {
    y: -20,
    opacity: 0,
    delay: 4,
    duration: .4,
    stagger: .2,
})

tl.from('.text h1', {
    x: -200,
    opacity: 0,
    duration: .4,
    stagger: .2,
})

tl.from('.images img', {
    x: 150,
    rotate: 45,
    opacity: 0,
    duration: .6,
    stagger: .3,
})

tl.from('footer h2', {
    y: 80,
    opacity: 0,
    duration: .4,
    stagger: .2,
})

tl.to('.text h1', {
    x: 200,
    opacity: 0,
    delay: 0.5,
    duration: .4,
    stagger: .2,
})

tl.to('.text', {
    y: -1000,
})

gsap.to('#img1', {
    x: -520,
    y: 100,
    scale: 1.25,
    rotate: 0,
    delay: 9.5,
    duration: 1,
})

gsap.to('#img2', {
    x: 480,
    y: 100,
    scale: 1.25,
    rotate: 0,
    delay: 9.5,
    duration: 1,
})

gsap.to('#img3', {
    x: -20,
    y: 100,
    scale: 1.25,
    rotate: 0,
    delay: 9.5,
    duration: 1,
})

tl.to('#img1, #img2, #img3', {
    opacity: 0,
    delay: 2,
})

tl.to('#img1, #img2, #img3', {
    y: -1000,
})

tl.from('.string', {
    opacity: 0,
})

// Text Selection Disable
document.addEventListener("selectstart", (e) => {
    e.preventDefault();
});


// Light Mode
const btn = document.querySelector('#light-mode-btn');
const string1 = document.querySelector('.string svg')
btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        string1.svg.path.stroke = 'black';
    } else {
        string1.svg.path.stroke = 'white';
    }
});

// Loader Animation
setTimeout(function(){
    document.querySelector("#loader").style.top = "-100%";
}, 3500);