import './sass//style.scss'

const navigationOpen = document.getElementById('navigation__open')
const navigationClose = document.getElementById('navigation__close')

navigationOpen.addEventListener('click', openMobileMenu)
navigationClose.addEventListener('click', closeMobileMenu)

function openMobileMenu() {
  navigationOpen.setAttribute('aria-expanded', true)
}

function closeMobileMenu() {
  navigationOpen.setAttribute('aria-expanded', false)
}
