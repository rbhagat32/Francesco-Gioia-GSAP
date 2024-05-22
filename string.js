var initialPath =  `M 100 200 Q 500 200 1300 200`
var finalPath =  `M 100 200 Q 500 200 1300 200`
var string = document.querySelector('.string svg')

string.addEventListener('mousemove', function(dets) {
    let x = dets.clientX * 0.8;
    let y = dets.clientY * 0.57;
    finalPath = `M 100 200 Q ${x} ${y} 1300 200`
    gsap.to('.string svg path', {
        attr: {d: finalPath},
        duration: 0.1,
        ease: "power3.out",
    })
})

string.addEventListener('mouseleave', function(dets) {
    gsap.to('.string svg path', {
        attr: {d: initialPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.1)",
    })
})