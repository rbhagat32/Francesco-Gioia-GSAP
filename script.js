let tl = gsap.timeline();

tl.from('nav h1, .links button, .links a', {
    y: -20,
    duration: .4,
    opacity: 0,
    stagger: .4,
    delay: .8,
})

tl.from('.text h1', {
    x: -200,
    opacity: 0,
    duration: .4,
    stagger: .4,
})

tl.from('.images img', {
    x: 300,
    rotate: 45,
    opacity: 0,
    duration: .6,
    stagger: .6,
})

tl.from('footer h2', {
    y: 80,
    opacity: 0,
    duration: .4,
    stagger: .4,
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