const menuButton = document.querySelector('#menu')

function openMenu() {
    document.querySelector('.nav-header').style.display = 'flex'
    document.querySelector('.nav-header').style.left = '0%'
    menuButton.style.display = 'none'
    document.querySelector('#close').style.display = 'flex'
    document.querySelector('body').style.overflowY = 'hidden'
}

function closeMenu() {
    document.querySelector('.nav-header').style.display = 'none'
    menuButton.style.display = 'flex'
    document.querySelector('#close').style.display = 'none'
    document.querySelector('body').style.overflowY = 'scroll'
}

