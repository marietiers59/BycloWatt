// Si la vidéo de présentation est absente, on masque le lecteur plutôt que d'afficher un cadre vide.
const video = document.querySelector('video');
const source = video ? video.querySelector('source') : null;

if (source) {
    source.addEventListener('error', () => {
        video.hidden = true;
    });
}
