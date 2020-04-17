export const showMenu = (event) => {
  const btnMenu = event.target;
  const ulMenu = btnMenu.closest('#menu').querySelector('.ul-menu-mobile');
  ulMenu.classList.toggle('hide');
};
