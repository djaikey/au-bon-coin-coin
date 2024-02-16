const modifButton = document.getElementById("modif-card-");
const validerForm = document.getElementById("bouton-validation")
const formulaireModif = document.getElementById("form-modif-");
const dataPrenom = document.getElementById("prenom");
const dataPoste = document.getElementById("poste");
const dataDescription = document.getElementById("description");
const annulation = document.getElementById("annulation");
const imagePrev =document.getElementById("img-prev");



modifButton.addEventListener("click", (e) => {
    formulaireModif.style.display = "block";
});



validerForm.addEventListener("click", (e) => {
    e.preventDefault()

    /** Récupérer les valeurs des champs*/
    let imageUrl = document.getElementById("image-Url").value;
    let prenom = document.getElementById("value-name").value;
    let poste = document.getElementById("value-poste").value;
    let description = document.getElementById("value-description").value;



    /**retourner les valeures */
    console.log(imageUrl);
    imagePrev.setAttribute("src", imageUrl);
    dataPrenom.innerText = prenom;
    dataPoste.innerText = poste;
    console.log(dataDescription);
    dataDescription.innerText = description;

    /**fermetur du formulair*/

    formulaireModif.style.display = "none";
});


annulation.addEventListener("click", (e) => {
    formulaireModif.style.display = "none";
})
