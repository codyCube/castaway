const media768px = window.matchMedia('(max-width: 768px)');
const media480px = window.matchMedia('(max-width: 480px)');
function media() {
   if (media480px.matches) {
      return
   }
   if (media768px.matches) {

      return
   }
}
media();

const burgerMenu = document.querySelector(".header__menu-burger");
const burger = document.querySelector(".header__menu_burger-icon");
burger.addEventListener('click', () => {
   console.log('assad');
   burgerMenu.classList.toggle('header__menu-burger_off');
})