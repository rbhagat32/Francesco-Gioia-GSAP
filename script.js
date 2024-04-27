let tl = gsap.timeline();

tl.from('nav h1, .links button, .links a', {
    y: -20,
    duration: .4,
    opacity: 0,
    stagger: .2,
    delay: 4,
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
    duration: .4,
    stagger: .3,
})

tl.from('footer h2', {
    y: 80,
    opacity: 0,
    duration: .4,
    stagger: .2,
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