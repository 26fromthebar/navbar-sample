const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.menu-close');
const navbar = document.querySelector('.navbar');

openMenu.addEventListener('click', () => {
  navbar.classList.add('appear-nav');
  openMenu.classList.add('hide-menu');
  closeMenu.classList.add('appear-menu');
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove('appear-nav');
  closeMenu.classList.remove('appear-menu');
  openMenu.classList.remove('hide-menu');
});
