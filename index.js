const menuIcon = document.getElementById('menuIcon'); 
const closeIcon = document.getElementById('closeIcon'); 

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu); 

function openMenu() {
    const openMenu = document.querySelector('.sidebar'); 
    openMenu.style.display = 'flex';
}

function closeMenu() {
    const closeMenu = document.querySelector('.sidebar'); 
    closeMenu.style.display = 'none'; 
}