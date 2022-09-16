const menu = document.getElementById('toggle')
menu.addEventListener('click',()=>{
    menu.classList.toggle('rotate')
})

const nav_menu = document.getElementById('menu')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click',()=>{
    nav_menu.classList.toggle('show_menu')
})

