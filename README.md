# SAÉ 1.05 / 1.06 — BycloWatt, entreprise événementielle et écologique

**Recueil de besoins** et **découverte de l'environnement économique et écologique** · BUT informatique S1 · automne 2025
Équipe : Benjamin BOUTOUT, Louis CARON, Marie TIERS (groupe 1B2).

## le projet

Créer de toutes pièces une entreprise **fictive** de l'économie sociale et solidaire, puis son **site vitrine**.
BycloWatt conçoit et loue des **attractions festives autonomes en énergie**, alimentées par l'effort du public :
un **vélomixeur** à *smoothies*, un **carrousel à pédales** et une **piste de danse piézoélectrique**.

→ **[visiter le site](https://marietiers59.github.io/BycloWatt/)** · portfolio de Marie TIERS : <https://marietiers59.github.io/e-portfolio/>

## démarche et livrables

| étape | livrable (dossier `livrables/`) |
| --- | --- |
| positionnement de l'entreprise, analyse de deux concurrents, matrices **FFOM** | `01-fiche-signaletique-et-positionnement.pdf`, `02-choix-entreprises-ess.pdf` |
| trois **personae** (cœur de cible, cible principale, cible secondaire) | `03-personae.pdf` |
| **enquête** auprès d'un panel et analyse des réponses | `04-enquete-questionnaire.pdf`, `05-enquete-analyse-des-resultats.pdf` |
| **charte graphique** (logo, palette, typographie, composants) et **charte éditoriale** (cibles, ton, SEO) | `06-charte-graphique.pdf`, `07-charte-editoriale.pdf` |
| croquis puis **maquettes Figma** mobile, tablette, ordinateur | `08-maquette-accueil-*.pdf` |
| site HTML / CSS / JavaScript *responsive*, validé W3C | racine du dépôt, `livrables/09-analyse-du-site-web.pdf` |
| rapport de conception : méthodes, usage raisonné de l'IA, bilan | `10-rapport-de-conception.pdf` |
| logo vectorisé (Adobe Illustrator) | `identite-visuelle/` |

Outils : Visual Studio Code, Figma, Adobe Photoshop, Illustrator et InDesign, Google Gemini (visuels des personae
et rendus 3D des produits, à partir de nos dessins), Discord pour la coordination.

Points marquants de l'enquête : un public surtout âgé de 18 à 25 ans, attiré par la **curiosité** et les événements
**musicaux** ; presque tous les répondants acceptent un effort physique pour faire fonctionner une attraction ;
le vélomixeur et la piste de danse sont les produits les plus attendus ; le budget moyen annoncé (462 €)
est nettement inférieur à nos estimations.

## mon rôle (Marie)

Dessin à main levée des **trois attractions** puis colorisation sous Photoshop, création d'une persona,
participation aux chartes, au rapport et au développement du site (une version alternative du site, plus complète,
a aussi été réalisée puis abandonnée au profit de la version commune présentée ici).

## le site

```
index.html, prestations.html, concepteurs.html, contact.html, a-propos.html
css/                 main.css (commune) + une feuille par page
js/                  diaporama.js (bannière), menu.js (menu mobile), video.js
img/                 images optimisées pour le web
media/               vidéo de présentation
livrables/           documents PDF de la SAÉ
identite-visuelle/   logos vectoriels
```

Aucun outil n'est nécessaire : ouvrir `index.html` dans un navigateur, ou visiter l'adresse ci-dessus.

## retouches d'octobre 2026 (nettoyage pour le portfolio)

Le design d'origine est conservé ; seuls des défauts ont été corrigés :

- **menu mobile fonctionnel** : l'icône « hamburger » ne faisait rien, les pages étaient inaccessibles sur téléphone ; le pictogramme est aussi rendu lisible sur le fond vert foncé ;
- **liens réparés** : chemins absolus (`/img/…`) cassés une fois en ligne, feuille de style et script inexistants appelés, liens du pied de page qui n'en étaient pas, boutons sans destination ;
- **polices** : les fichiers Trebuchet MS et Lucida (polices sous licence) ne sont plus diffusés ; le CSS les appelle sur le poste du visiteur, avec une police libre en secours ;
- **images** : 15,7 Mo ramenés à 4,1 Mo, sans changement visible ;
- **HTML valide W3C** sur les cinq pages ; CSS valide hors `scrollbar-width`, propriété standard récente que le validateur ne connaît pas encore ;
- langue des pages corrigée (`lang="fr"`, page des prestations en anglais), titres d'onglet, textes alternatifs, champs de contact typés (e-mail, téléphone) ;
- coquilles corrigées (« Nos actualités », « Nos produits phares », « quelques services », « prestations »…), unité « kW / h » remplacée par « kW », mention « entreprise fictive » ajoutée au pied de page, pages exclues des moteurs de recherche (`noindex`).

Non repris : les quatre copies antérieures du site (dont la version alternative), les cinq jeux de polices, les brouillons,
copies et versions « (1) » des documents Word, les sources InDesign, les images générées non retenues, les captures
d'écran des pages du rapport, le pinceau Photoshop et les diaporamas de soutenance restés à l'état d'ébauche.
La capture vidéo de l'ancienne version du site reste visible sur YouTube : <https://youtu.be/dxtPSDkc-Q8>.
