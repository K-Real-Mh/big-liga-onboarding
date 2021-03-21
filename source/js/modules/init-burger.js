import {disableScrolling, enableScrolling} from '../utils/scroll-lock';
const menu = document.querySelector('.burger-menu');
const menuBtn = document.querySelector('.burger-btn');

export const initBurger = () => {
  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (menu.classList.contains('_active')) {
        menuBtn.classList.remove('_active');
        menu.classList.remove('_active');
        enableScrolling();
      } else {
        menuBtn.classList.add('_active');
        menu.classList.add('_active');
        disableScrolling();
      }
    })
  }
}
