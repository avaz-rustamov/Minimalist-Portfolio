var elOpenNav = document.querySelector('.site-header');
var elOpenToggle = document.querySelector('burger-nav');

elOpenToggle.addEventListener('click', function (){
  elOpenNav.classList.toggle('sitenav--open');
});