let text = document.getElementById('text')
let image1 = document.getElementById('1')
let image2 = document.getElementById('2')
let image3 = document.getElementById('3')
let image4 = document.getElementById('4')
let image5 = document.getElementById('5')
let image6 = document.getElementById('6')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    
    image6.style.left = value * 1.5 + 'px';
    image5.style.left = value * -2.5 + 'px';
    image4.style.left = value * 3.5 + 'px';
    image3.style.left = value * -4.5 + 'px';
    image2.style.left = value * 5.5 + 'px';
})