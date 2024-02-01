// menu
const menuShowButton = document.getElementById('menuShowButton')
const menuber = document.querySelector('nav ul')

menuShowButton.addEventListener('click', () => {
    menuber.classList.toggle('show')
    if (menuber.classList.contains('show')) {
        menuShowButton.style.transform = 'rotate(90deg)'
    } else {
        menuShowButton.style.transform = 'rotate(0deg)'
    }
})

// slider
const slider = document.querySelector('.slider')
const icons = document.querySelectorAll('.icon')
const slider_parent = document.querySelector('.slider_parent')

let isMousedown = false;
let iconchacker = ()=>{
    let scrolVal = slider.scrollLeft;
    let maxscrollVal = slider.scrollWidth - slider.clientWidth;
    icons[0].style.display = (scrolVal > 0) ? 'block':'none'
    icons[1].style.display = (scrolVal >= maxscrollVal) ? 'none':'block'
}
icons.forEach(icon =>{
    icon.addEventListener('click',()=>{
      id = icon.getAttribute('id');
    slider.scrollLeft += (id === 'left')? -600:600;
    setTimeout(() => {
        iconchacker()
    }, 600);
    })
})

slider.addEventListener('mousedown',()=>{
    isMousedown = true;
    slider.style.cursor = 'grabbing';
})
document.addEventListener('mouseup',()=>{
    isMousedown = false;
    slider.style.cursor = '';
    slider.classList.add('scrollBehave');
})
slider.addEventListener('mousemove',(e)=>{
    if (!isMousedown) return;
    slider.scrollLeft -= e.movementX;
    slider.classList.remove('scrollBehave');
    iconchacker()
})