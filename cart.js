//produit 1

//supprimer
document.getElementById('supprimer1').addEventListener('click', function() {
    document.getElementById('quantité1').textContent = 0;
    document.getElementById('prix1').textContent = "0.00€";
});

//ajouter
document.getElementById('ajouter1').addEventListener('click', function() {
    let quantite = document.getElementById('quantité1');
    let prix = document.getElementById('prix1');
    let prixUnitaire = 25; // Prix unitaire du produit

    // Augmenter la quantité
    quantite.innerText = parseInt(quantite.innerText) + 1;

    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});

//moins 1
document.getElementById('moins1').addEventListener('click', function() {
    let quantite = document.getElementById('quantité1');
    let prix = document.getElementById('prix1');
    let prixUnitaire = 25;

    // Diminuer la quantité si elle est supérieure à 1
    if (parseInt(quantite.innerText) > 0) {
        quantite.innerText = parseInt(quantite.innerText) - 1;
    }
    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});


//produit 2

//supprimer
document.getElementById('supprimer2').addEventListener('click', function() {
    document.getElementById('quantité2').textContent = 0;
    document.getElementById('prix2').textContent = "0.00€";
});

//ajouter
document.getElementById('ajouter2').addEventListener('click', function() {
    let quantite = document.getElementById('quantité2');
    let prix = document.getElementById('prix2');
    let prixUnitaire = 50; // Prix unitaire du produit

    // Augmenter la quantité
    quantite.innerText = parseInt(quantite.innerText) + 1;

    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});

//moins 1
document.getElementById('moins2').addEventListener('click', function() {
    let quantite = document.getElementById('quantité2');
    let prix = document.getElementById('prix2');
    let prixUnitaire = 50;

    // Diminuer la quantité si elle est supérieure à 1
    if (parseInt(quantite.innerText) > 0) {
        quantite.innerText = parseInt(quantite.innerText) - 1;
    }
    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});

//produit 3

//supprimer
document.getElementById('supprimer3').addEventListener('click', function() {
    document.getElementById('quantité3').textContent = 0;
    document.getElementById('prix3').textContent = "0.00€";
});

//ajouter
document.getElementById('ajouter3').addEventListener('click', function() {
    let quantite = document.getElementById('quantité3');
    let prix = document.getElementById('prix3');
    let prixUnitaire = 30; // Prix unitaire du produit

    // Augmenter la quantité
    quantite.innerText = parseInt(quantite.innerText) + 1;

    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});

//moins 1
document.getElementById('moins3').addEventListener('click', function() {
    let quantite = document.getElementById('quantité3');
    let prix = document.getElementById('prix3');
    let prixUnitaire = 30;

    // Diminuer la quantité si elle est supérieure à 1
    if (parseInt(quantite.innerText) > 0) {
        quantite.innerText = parseInt(quantite.innerText) - 1;
    }
    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});

//produit 4

//supprimer
document.getElementById('supprimer4').addEventListener('click', function() {
    document.getElementById('quantité4').textContent = 0;
    document.getElementById('prix4').textContent = "0.00€";
});

//ajouter
document.getElementById('ajouter4').addEventListener('click', function() {
    let quantite = document.getElementById('quantité4');
    let prix = document.getElementById('prix4');
    let prixUnitaire = 119.99; // Prix unitaire du produit

    // Augmenter la quantité
    quantite.innerText = parseInt(quantite.innerText) + 1;

    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});
//moins 1
document.getElementById('moins4').addEventListener('click', function() {
    let quantite = document.getElementById('quantité4');
    let prix = document.getElementById('prix4');
    let prixUnitaire = 119.99;

    // Diminuer la quantité si elle est supérieure à 1
    if (parseInt(quantite.innerText) > 0) {
        quantite.innerText = parseInt(quantite.innerText) - 1;
    }
    // Mettre à jour le prix
    prix.innerText = (prixUnitaire * parseInt(quantite.innerText)).toFixed(2) + '€';
});

//tout supprimer
    document.getElementById('yes').addEventListener('click', function() {
        document.getElementById('quantité1').innerText = 0;
        document.getElementById('prix1').innerText = "0.00€";
        document.getElementById('quantité2').innerText = 0;
        document.getElementById('prix2').innerText = "0.00€";
        document.getElementById('quantité3').innerText = 0;
        document.getElementById('prix3').innerText = "0.00€";
        document.getElementById('quantité4').innerText = 0;
        document.getElementById('prix4').innerText = "0.00€";
        document.getElementById('totalprix').innerText = "0.00€";
    });

    document.getElementById('deletall1').addEventListener('click', function() {
       
        // Affiche une boîte de dialogue de confirmation
        let x = document.getElementById("check");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        // Cache l'élément avec l'id 'deletall2'
        document.getElementById('deletall3').style.display = 'none';

        // Si l'utilisateur clique sur 'Oui', exécute la fonction
        if (confirmation) {
            toutsuprimer();
        }
    });

// total

function calculerTotal() {
    // Obtenir les prix de chaque produit
    let prix1 = parseFloat(document.getElementById('prix1').innerText.replace('€', ''));
    let prix2 = parseFloat(document.getElementById('prix2').innerText.replace('€', ''));
    let prix3 = parseFloat(document.getElementById('prix3').innerText.replace('€', ''));
    let prix4 = parseFloat(document.getElementById('prix4').innerText.replace('€', ''));

    // Calculer le total
    let total = prix1 + prix2 + prix3 + prix4;

    // Afficher le total
    document.getElementById('totalprix').innerText = total.toFixed(2) + '€';

}

// Appeler la fonction calculerTotal chaque fois qu'un bouton est cliqué
document.getElementById('ajouter1').addEventListener('click', calculerTotal);
document.getElementById('moins1').addEventListener('click', calculerTotal);
document.getElementById('supprimer1').addEventListener('click', calculerTotal);

document.getElementById('ajouter2').addEventListener('click', calculerTotal);
document.getElementById('moins2').addEventListener('click', calculerTotal);
document.getElementById('supprimer2').addEventListener('click', calculerTotal);

document.getElementById('ajouter3').addEventListener('click', calculerTotal);
document.getElementById('moins3').addEventListener('click', calculerTotal);
document.getElementById('supprimer3').addEventListener('click', calculerTotal);

document.getElementById('ajouter4').addEventListener('click', calculerTotal);
document.getElementById('moins4').addEventListener('click', calculerTotal);
document.getElementById('supprimer4').addEventListener('click', calculerTotal);

//fermer validation
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// Ajoutez des écouteurs d'événements aux boutons
yesButton.addEventListener('click', toggleDisplay);
noButton.addEventListener('click', toggleDisplay);
//afficher/cacher les élements  
function toggleDisplay() {
    let x = document.getElementById("check");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById('deletall3').style.display = 'block';
}

// Adaptation de l'image selon la taille de l'écran du client
var canards_groupe = document.getElementById("canards-groupe-cart");
largeur_ecran();

// Quand la fenêtre change de taille, on revérifie que les tailles sont bonnes
window.onresize = function() { largeur_ecran(); }

// Fonction pour modifier la largeur de la bannière
function largeur_ecran()
{ 
	if (document.body) 
	{ 
		if (document.body.clientWidth >= 1336) 
		{
			canards_groupe.setAttribute("width","auto");
		} 
		else 
		{
			canards_groupe.setAttribute("width","100%");
		}
	} 
}