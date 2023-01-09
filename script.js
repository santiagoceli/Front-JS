const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingLogo = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:  'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push({
    name: 'Bed',
    price: 220,
    image:  'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600',
})
productList.push({
    name: 'Computer',
    price: 420,
    image:  'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=600',
})
console.log(productList);



// <div class="product-card">
//<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//<div class="product-info">
//  <div>
//    <p>$120,00</p>
//    <p>Bike</p>
//  </div>
// <figure>
//    <img src="./icons/bt_add_to_cart.svg" alt="">
//  </figure>
// </div>
for(product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const divDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');
    
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');



    productFigure.appendChild(productImgCart);
    divDiv.appendChild(productPrice);
    divDiv.appendChild(productName);
    productInfo.append(divDiv,productFigure);
    productCard.append(productImg,productInfo);
    cardsContainer.append(productCard);
}
