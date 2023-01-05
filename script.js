const navBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navBar.addEventListener('click', toggleNavbar);

function toggleNavbar(){
    console.log("trying");
    desktopMenu.classList.toggle('inactive');
};

// object.style.display = 'value';