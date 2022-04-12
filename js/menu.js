document.querySelector('.header__inner-hamburger').addEventListener('click', function(e){
   e.preventDefault();
   this.classList.toggle('is-active');
   document.querySelector('.navigation').classList.toggle('is-visible')
})
