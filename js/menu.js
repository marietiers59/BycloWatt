// Menu « hamburger » des petits écrans : le bouton déplie ou replie les liens de navigation.
const boutonMenu = document.querySelector('.burgerMenu');
const navigation = document.querySelector('header nav');

if (boutonMenu && navigation) {
    boutonMenu.addEventListener('click', () => {
        const ouvert = navigation.classList.toggle('ouvert');
        boutonMenu.setAttribute('aria-expanded', String(ouvert));
    });
}
