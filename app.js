//* NAV MENU
const burgerBtn = document.querySelector('[data-open-btn]');
const closeBtn = document.querySelector('[data-close-btn');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('#overlay');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
    overlay.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
})

overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
})

//* PRODUCT FORM
const form = document.querySelector('#form');
const minusProduct = document.querySelector('#minus');
const addProduct = document.querySelector('#plus');
let amountOfProduct = parseInt(document.querySelector('#amount').textContent);
let totalAmountOfProduct = 0;

minusProduct.addEventListener('click', () => {
    if(amountOfProduct <= 0) return
    amountOfProduct--;
    document.querySelector('#amount').textContent = amountOfProduct;
})

addProduct.addEventListener('click', () => {
    amountOfProduct++;
    document.querySelector('#amount').textContent = amountOfProduct;
})
form.addEventListener('submit', e => {
    e.preventDefault();
    updateAmount();
})

function updateAmount(){
    totalAmountOfProduct += amountOfProduct;
    document.querySelector('#amount').textContent = 0;
    amountOfProduct = 0;
    updateShoppingCart();
}

//* SHOPPING CART MENU
const cartBtn = document.querySelector('.nav__icons__cart');
const cartLabel = document.getElementById('num-of-items');
const cartMenu = document.querySelector('.cart-menu');
const cartItemAmount = document.querySelector('#item-amount');
const cartTotal = document.querySelector('#cart__total');
const itemInCart = document.querySelector('.cart-menu__items-container');
const emptyText = document.querySelector('.empty');
let totalCost = 0;
const checkoutBtn = document.querySelector('.checkout-btn');
const deleteIcon = document.querySelector('.cart-menu__delete');

cartBtn.addEventListener('click', () => {
    cartMenu.classList.toggle('active');
});

deleteIcon.addEventListener('click', () => {
    deleteItems();
})

function updateShoppingCart(){
    if(totalAmountOfProduct > 0){
        cartLabel.textContent = totalAmountOfProduct;
        cartItemAmount.textContent = totalAmountOfProduct;
        emptyText.classList.add('not-empty');
        itemInCart.classList.add('active');
        checkoutBtn.classList.add('active');
        totalCost = totalAmountOfProduct * 125;
        cartTotal.textContent = `$${totalCost}.00`;
    }
}

function deleteItems() {
    totalAmountOfProduct = 0;
    cartLabel.textContent = '';
    emptyText.classList.remove('not-empty');
    itemInCart.classList.remove('active');
    checkoutBtn.classList.remove('active');
}


//Carousel
const rightArrow = document.querySelector('.carousel__right');
const leftArrow = document.querySelector('.carousel__left');
const carousel = document.querySelector('.carousel');
// const carouselImages = Array.from(document.querySelector('.carousel-images').children);
const carouselImages = document.querySelector('.move');

const style = getComputedStyle(carouselImages);
const transform = style.transform;



rightArrow.addEventListener('click', () => {

})

function updatingCarousel() {
    let nextImage = carouselImages[1];
    let prevImage = carouselImages[0];
}

