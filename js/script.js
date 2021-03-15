const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigational-links')

function toggleMeny() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)