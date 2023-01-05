const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuLogo = document.querySelector('.menu');
const mobilepMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopBar);
menuLogo.addEventListener('click', toggleMobileBar);

function toggleDesktopBar(){
    console.log("trying");
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileBar() {
    console.log('trying2.0');
    mobilepMenu.classList.toggle('inactive');
}

// object.style.display = 'value';