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
    delay: 1,
    duration: .4,
    stagger: .2,
})

tl.to('.text', {
    y: 1000,
})

tl.to('#img1', {
    x: -520,
    y: 100,
    scale: 1.5,
    rotate: 0,
    duration: .6,
})

tl.to('#img2', {
    x: 480,
    y: 100,
    scale: 1.5,
    rotate: 0,
    duration: .6,
})

tl.to('#img3', {
    x: -20,
    y: 100,
    scale: 1.5,
    rotate: 0,
    duration: .6,
})

document.querySelector('#img1').addEventListener('mousemove', function(dets) {
    console.log(dets.x, dets.y);

})

// Text Selection Disable
document.addEventListener("selectstart", (e) => {
    e.preventDefault();
});


// Light Mode
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Loader Animation
setTimeout(function(){
    document.querySelector("#loader").style.top = "-100%";
}, 3500);