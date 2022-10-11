const menuPage = document.querySelector('.landing-page-burger-menu');
const showNav = document.querySelector('.header-nav__right')
const icon = document.getElementsByClassName('menu-icon-vector')

menuPage.addEventListener('click', showMenu);

function showMenu(){
    showNav.classList.toggle('active')
    for(i = 0 ; i < icon.length; i++){
        icon[i].classList.toggle('active')
    }
}

