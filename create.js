const modifButton = document.getElementById("modif-card-");
const formulaireModif = document.getElementById("form-modif-");
const dataImage =document.getElementById("image-url");
const dataPrenom = document.getElementById("prenom");
const dataDescription = document.getElementById("description");
const annulation = document.getElementById("annulation");



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
    dataImage.src= imageUrl;
    dataPrenom.innerText = prenom;
    dataPoste.innerText = poste;
    dataDescription.innerText = description;

    /**fermetur du formulair*/

    formulaireModif.style.display = "none";
});


annulation.addEventListener("click", (e) => {
    formulaireModif.style.display = "none";
})
