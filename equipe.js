
/**constantes désignation objet*/

/**Boutons */

const modifButton1 = document.getElementById("modif-card-1");
const modifButton2 = document.getElementById("modif-card-2");
const modifButton3 = document.getElementById("modif-card-3");
const validerForm1 = document.getElementById("bouton-validation1");
const validerForm2 = document.getElementById("bouton-validation2");
const validerForm3 = document.getElementById("bouton-validation3");


/**Formulaire */


const formulaireModif1 = document.getElementById("form-modif-1");
const formulaireModif2 = document.getElementById("form-modif-2");
const formulaireModif3 = document.getElementById("form-modif-3");

/**destination des données des formulaires */

const dataPrenom1 = document.getElementById("prenom1");
const dataPrenom2 = document.getElementById("prenom2");
const dataPrenom3 = document.getElementById("prenom3");

const dataPoste1 = document.getElementById("poste1");
const dataPoste2 = document.getElementById("poste2");
const dataPoste3 = document.getElementById("poste3");

const dataDescription1 = document.getElementById("description1");
const dataDescription2 = document.getElementById("description2");
const dataDescription3 = document.getElementById("description3");

const annulation1 = document.getElementById("annulation1")
const annulation2 = document.getElementById("annulation2")
const annulation3 = document.getElementById("annulation3")

/**Evenements aux clicks */

/**Boutons modifier */

modifButton1.addEventListener("click", (e) => {
    formulaireModif1.style.display = "block";
});
    
modifButton2.addEventListener("click", (e) => {
    formulaireModif2.style.display = "block";
});

modifButton3.addEventListener("click", (e) => {
    formulaireModif3.style.display = "block";
    
});

/**Boutons validations des formulaires */

validerForm1.addEventListener("click", (e) => {
    e.preventDefault()

    /** Récupérer les valeurs des champs*/
    
    let prenom1 = document.getElementById("value-name1").value;
    let poste1 = document.getElementById("value-poste1").value;
    let description1 = document.getElementById("value-description1").value;

    /**retourner les valeures */
    
    dataPrenom1.innerText = prenom1;
    dataPoste1.innerText = poste1;
    dataDescription1.innerText = description1;

    /**fermetur du formulair*/

    formulaireModif1.style.display = "none";
});

validerForm2.addEventListener("click", (e) => {
    e.preventDefault()
    
    let prenom2 = document.getElementById("value-name2").value;
    let poste2 = document.getElementById("value-poste2").value; 
    let description2 = document.getElementById("value-description2").value;

    /** injecter les valeures dans les balises html correspondante */
    
    
    dataPrenom2.innerText = prenom2;
    dataPoste2.innerText = poste2;
    dataDescription2.innerText = description2;

    /** fermeture du formulaire*/

    formulaireModif2.style.display = "none";
})

validerForm3.addEventListener("click", (e) => {
    e.preventDefault()

    /**  Récupérer les valeurs des champs */

    let prenom3 = document.getElementById("value-name3").value;
    let poste3 = document.getElementById("value-poste3").value; 
    let description3 = document.getElementById("value-description3").value;
 
    /**injecter les valeures dans les balises html correspondante */
     
    dataPrenom3.innerText = prenom3;
    dataPoste3.innerText = poste3;
    dataDescription3.innerText = description3;
    
    /** fermeture du formulaire*/

    formulaireModif3.style.display = "none";
})

/**Annulation de l'envoie et fermeture du formulaire */

annulation1.addEventListener("click", (e) => {
    formulaireModif1.style.display = "none";
})

annulation2.addEventListener("click", (e) => {
    formulaireModif2.style.display = "none";
})

annulation3.addEventListener("click", (e) => {
    formulaireModif3.style.display = "none";
})

/*Fonctions gestion des formulaire */
