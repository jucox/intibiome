function openMenu() {
    document.querySelector('.nav-header').style.display = 'flex'
    document.querySelector('.nav-header').style.left = '0%'
    document.querySelector('#menu').style.display = 'none'
    document.querySelector('#close').style.display = 'flex'
    document.querySelector('body').style.overflowY = 'hidden'
}

function closeMenu() {
    document.querySelector('.nav-header').style.display = 'none'
    document.querySelector('#menu').style.display = 'flex'
    document.querySelector('#close').style.display = 'none'
    document.querySelector('body').style.overflowY = 'scroll'
}
