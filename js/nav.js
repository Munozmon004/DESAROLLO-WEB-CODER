window.addEventListener("scroll" ,function(){
    var header =document.querySelector("header");
    header.classList.toggle('down' ,window.scrollY > 0);
});


var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btno');
var closeBtn = document.querySelector('.close-btno');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

const productContainers = [...document.querySelectorAll('.item-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


