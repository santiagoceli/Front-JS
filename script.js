const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingLogo = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopBar);
menuLogo.addEventListener('click', toggleMobileBar);
shoppingLogo.addEventListener('click', asideBar);

function toggleDesktopBar(){
    console.log("trying");
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileBar() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    console.log('trying2.0');
    mobileMenu.classList.toggle('inactive');
}

function asideBar() {
    console.log('trying3.0'); 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
// object.style.display = 'value';