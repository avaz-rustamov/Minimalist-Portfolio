var elOpenToggle = document.querySelector('burger-nav');
var elOpenNav = document.querySelector('.site-header');

elOpenToggle.addEventListener('click', function (){
  elOpenNav.classList.toggle('sitenav--open');
});