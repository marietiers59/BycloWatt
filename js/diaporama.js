// Diaporama de la bannière d'accueil : fondu d'une image à la suivante toutes les 4 secondes.
const images = document.querySelectorAll('.img-slideshow');
let index = 0;

function afficherImageCourante() {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

if (images.length > 0) {
    afficherImageCourante();
    setInterval(() => {
        index = (index + 1) % images.length;
        afficherImageCourante();
    }, 4000);
}
