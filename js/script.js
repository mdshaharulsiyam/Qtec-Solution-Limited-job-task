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