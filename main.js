var btnSearch = document.querySelector('.header__search-icon');
var searchIcon = document.querySelector('.js-search-icon');
var inputSearch = document.querySelector('.header__input-text');
var tiClose = document.querySelector('.header__icon-close');
console.log(btnSearch,searchIcon,inputSearch,tiClose)

btnSearch.addEventListener('click',()=>{
    btnSearch.classList.toggle('js-search');
    searchIcon.classList.toggle('opa-0');
    inputSearch.classList.toggle('show');
    tiClose.classList.toggle('opa-1')
    body.classList.toggle('hidden')
})
tiClose.addEventListener('click',()=>{
    btnSearch.classList.toggle('js-search');
    searchIcon.classList.toggle('opa-0');
    inputSearch.classList.toggle('show');
    tiClose.classList.remove('opa-1')
    body.classList.toggle('hidden')
})

var sunIcon= document.querySelector('.header__switch-sun');
var moonIcon= document.querySelector('.header__switch-moon');
var body = document.querySelector('body');

moonIcon.addEventListener('click', ()=>{
    moonIcon.classList.toggle('dp-none');
    sunIcon.classList.toggle('dp-block');
    body.classList.toggle('dark');
})
sunIcon .addEventListener('click', ()=>{
    moonIcon.classList.toggle('dp-none');
    sunIcon.classList.toggle('dp-block');
    body.classList.toggle('dark');

})
var headerCorp = document.getElementById('header__corp')
console.log(headerCorp,window.pageYOffset)
window.addEventListener('scroll', ()=>{
    var headerCorp = document.getElementById('header__corp')
    if(window.pageYOffset==0){

        headerCorp.classList.remove('fixed-scroll')
    }else{
        headerCorp.classList.add('fixed-scroll')

    }
})

var navBarMobile = document.getElementById('nav__mobile');
console.log( navBarMobile.classList.remove('.fa-solid'))
navBarMobile.addEventListener('click', ()=>{
    var navBaricon = document.getElementById('nav-icon-mobile-bar');
    var navXicon = document.getElementById('nav-icon-mobile-x');
    navBaricon.classList.toggle('show');
    navXicon.classList.toggle('show');

    var body = document.querySelector('body');
    body.classList.toggle('hidden-bar');
    
    var menuPrimary= document.getElementById('navbarSupportedContent');
    menuPrimary.classList.toggle('hidden');
    
    var headerCorp = document.getElementById('header__corp')
    headerCorp.classList.toggle('mobile-se')
});