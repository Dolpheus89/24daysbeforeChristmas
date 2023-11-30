// fenetre modal
const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");
const dateActuelle = new Date();
const jourActuel = dateActuelle.getDate();
console.log(jourActuel);

modalTrigger.forEach((trigger) => {
  const caseNumb = trigger.classList[1];
  const index = parseInt(caseNumb.replace("case", ""));

  function handleClick() {
    if (index <= jourActuel) {
      toggleModal();
    } else {
      alert("Vous ne pouvez pas ouvrir cette case avant la date prévue !");
    }
  }

  trigger.addEventListener("click", handleClick);
});

function toggleModal() {
  modalContainer.classList.toggle("active");
}

// select message

const titleElement = document.querySelector(".modal h1");
const pElement = document.querySelector(".modal p");

const title = [
  "",
  `Jour 1 — Anectode !`,
  "Jour 2 — Défi du jour !",
  "Jour 3 — Pensée du jour ~",
  "Jour 4 — Défi du jour !",
  "Jour 5 — Anectode !",
  "Jour 6 — Défi du jour !",
  "Jour 7 — Pensée du jour ~",
  "Jour 8 — Anectode !",
  "Jour 9 — Défi du jour !",
  "Jour 10 — Pensée du jour ~",
  "Jour 11 — Anectode !",
  "Jour 12 — Pensée du jour ~",
  "Jour 13 — Anectode !",
  "Jour 14 — Défi du jour !",
  "Jour 15 — Pensée du jour ~",
  "Jour 16 — Anectode !",
  "Jour 17 — Défi du jour !",
  "Jour 18 — Pensée du jour ~",
  "Jour 19 — Défi du jour !",
  "Jour 20 — Anectode !",
  "Jour 21 — Défi du jour !",
  "Jour 22 — Pensée du jour ~",
  "Jour 23 — Anectode !",
  "Jour 24 — Pensée du jour ~",
];
const message = [
  // 0
  "",
  // 1
  `Le Bug de l'an 2000 :
  En l'an 2000, le monde retenait son souffle en raison du fameux bug de l'an 2000. Les programmeurs avaient prévu des années à l'avance des problèmes potentiels liés à la représentation des années sur deux chiffres. L'arrivée du nouveau millénaire a conduit à une course frénétique pour mettre à jour d'innombrables lignes de code afin d'éviter des catastrophes informatiques majeures. Heureusement, la plupart des systèmes ont été corrigés à temps, mais cela a été un moment mémorable dans l'histoire du développement informatique.`,
  // 2
  `Affichage de la Date :
  Description : Crée une page HTML simple avec un bouton. Lorsque le bouton est cliqué, utilise JavaScript pour afficher la date actuelle dans une zone de texte.`,
  // 3
  `Chaque jour est une nouvelle opportunité de grandir, d'apprendre et de créer quelque chose de beau dans le monde ou pour toi-même, peut-être même les deux.`,
  // 4
  `Animation CSS :
  Description : Conçois une petite animation CSS où une image ou un élément HTML se déplace progressivement vers la droite lorsque survient un événement, comme le survol de la souris.`,
  // 5
  `Le premier bug informatique :
  Le terme "bug" a été popularisé par Grace Hopper en 1947 lorsqu'une panne dans le Mark II, un ordinateur de l'Université Harvard, a été attribuée à un insecte (une mite) coincé entre les relais. Ainsi, le premier bug informatique était littéralement un bug.`,
  // 6
  `Calculatrice Simple : 
  Description : Crée une calculatrice basique en utilisant HTML pour les boutons et JavaScript pour effectuer les calculs. Affiche le résultat dans une zone de texte.`,
  // 7
  `Les défis d'aujourd'hui sont les opportunités de demain. Chaque obstacle surmonté renforce ta résilience et te rapproche de tes objectifs. Ne lâche rien.`,
  // 8
  `Le développement du premier langage de programmation :
  En 1953, IBM a introduit le Fortran (Formula Translation), le premier langage de programmation élevé. Il a été conçu pour les ingénieurs et les scientifiques afin de faciliter la programmation de calculs complexes. Fortran a ouvert la voie à une nouvelle ère de développement informatique en rendant la programmation plus accessible.`,
  // 9
  `Liste Déroulante Dynamique :
  Description : Crée une liste déroulante HTML avec différentes options. Utilise JavaScript pour détecter le changement d'option et afficher une alerte avec l'option sélectionnée.`,
  // 10
  `La gratitude transforme ce que nous avons en suffisance, et plus. En appréciant les petites choses, tu trouveras la richesse dans la simplicité`,
  // 11
  `La naissance de l'Open Source avec Linux :
  En 1991, Linus Torvalds a annoncé la sortie du noyau Linux, un système d'exploitation basé sur le noyau Unix. Ce projet a marqué le début du mouvement open source, encourageant la collaboration mondiale des programmeurs. Aujourd'hui, Linux alimente une grande partie de l'infrastructure Internet mondiale.`,
  // 12
  `Tes efforts d'aujourd'hui sont les semences de tes réussites de demain. Chaque action compte, aussi petite soit-elle.`,
  // 13
  `La première attaque de virus informatique :
  En 1986, le premier virus informatique majeur, appelé "Brain", a été découvert. Il a été créé par deux frères au Pakistan et n'était pas malveillant, mais plutôt destiné à traquer la distribution illégale de logiciels. Cette découverte a marqué le début des préoccupations sérieuses concernant la sécurité informatique.`,
  // 14
  `Éléments de la Suite de Fibonacci :
  Description : Utilise JavaScript pour générer les premiers termes (par exemple, les 10 premiers) de la suite de Fibonacci et affiche les dans une liste HTML.`,
  // 15
  `L'échec n'est pas la fin, mais une opportunité de rebondir plus fort. Chaque expérience, qu'elle soit positive ou négative, contribue à ta croissance personnelle.`,
  // 16
  `La saga du passage à l'an 2038 :
  Bien que moins connu que le bug de l'an 2000, le problème de l'an 2038 pose des défis similaires. Il est lié à la représentation du temps dans de nombreux systèmes informatiques, qui utilisent une valeur de 32 bits pour stocker le temps en secondes depuis le 1er janvier 1970 (système de temps Unix). En 2038, cette valeur dépassera la capacité du système, provoquant des erreurs et des bugs potentiels si les systèmes ne sont pas mis à jour pour utiliser des valeurs de 64 bits. Les développeurs sont déjà confrontés au défi de préparer leurs applications pour cette transition imminente.`,
  // 17
  `Changement de Couleur Dynamique :
  Description : Crée une page HTML avec un bouton. À chaque clic sur le bouton, utilise JavaScript pour changer la couleur de fond de la page de manière aléatoire.`,
  // 18
  `Validation de Formulaire :
  Description : Crée un formulaire HTML simple avec un champ de texte. Utilise JavaScript pour vérifier si le champ de texte est vide lorsque le formulaire est soumis et affiche une alerte en conséquence.`,
  // 19
  `Jeu de Devine le Nombre :
  Description : Conçois une page HTML avec un champ de texte pour entrer un nombre et un bouton pour soumettre la supposition. Utilise JavaScript pour générer un nombre aléatoire entre 1 et 100. Affiche des indices si la supposition est trop basse, trop élevée ou correcte.`,
  // 20
  `
  Malbolge, un langage de programmation notoire pour sa complexité extrême, a attiré l'attention de la communauté de la programmation en raison de son niveau de difficulté unique. Des développeurs ont participé à des défis en ligne, tentant de résoudre des problèmes algorithmiques en Malbolge pour tester leurs compétences. Certains ont même créé des générateurs automatiques de code Malbolge pour contourner la difficulté inhérente à l'écriture manuelle. Bien que des compétitions informelles aient eu lieu, l'utilisation pratique de Malbolge reste limitée en raison de sa complexité délibérée et de son statut d'outil plus adapté aux défis intellectuels qu'à des applications réelles. Malbolge continue néanmoins de fasciner les programmeurs, devenant un exemple emblématique de langage de programmation ésotérique, où la difficulté est élevée au rang d'art.`,
  // 21
  `Création d'une Horloge Dynamique :
  Description : Crée une page HTML simple avec une zone de texte qui affiche l'heure actuelle. Utilise JavaScript pour mettre à jour dynamiquement cette zone de texte chaque seconde. Ajoute du CSS pour styliser la présentation de l'horloge.`,
  // 22
  `La bienveillance envers soi-même est la clé de l'épanouissement. En prenant soin de toi, tu deviens plus fort(e) pour prendre soin des autres.`,
  //  23
  `Le développement de l'intelligence artificielle :
  Ces dernières années, le développement de l'intelligence artificielle a pris une place prépondérante. Des progrès significatifs ont été réalisés dans les domaines tels que l'apprentissage automatique, le traitement du langage naturel et la vision par ordinateur, ouvrant de nouvelles perspectives passionnantes et suscitant des débats éthiques sur l'avenir de la technologie. D'ailleurs, sache que la rédaction de ces petites anecdotes ont été générées par une IA ;) !`,
  // 24
  `Chaque journée apporte son lot de moments spéciaux. En restant conscient et ouvert, tu découvres la magie cachée dans les instants apparemment ordinaires. — Oh, j'allais oublier... Je te souhaite un Bon Réveillon, un Joyeux Noël et une Excellente Année à toi et à ton entourage ! :)`,
];

function changeContent(classList) {
  const caseNumb = classList[1];
  const index = parseInt(caseNumb.replace("case", ""));
  titleElement.innerHTML = title[index];
  pElement.innerHTML = message[index];
}

for (let i = 1; i <= 24; i++) {
  let elements = document.getElementsByClassName("case" + i);

  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", function () {
      changeContent(element.classList);
    });
  });
}

//  FINITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO !
