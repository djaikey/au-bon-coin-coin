const modifButton4 = document.getElementById("modif-card4");
const validerForm4 = document.getElementById("bouton-validation4")
const formulaireModif4 = document.getElementById("form-modif4");
const dataPrenom4 = document.getElementById("prenom4");
const dataPoste4 = document.getElementById("poste4");
const dataDescription4 = document.getElementById("description4");
const annulation4 = document.getElementById("annulation4");
const imagePrev4 =document.getElementById("img-prev4");



modifButton4.addEventListener("click", (e) => {
    formulaireModif4.style.display = "block";
});



validerForm4.addEventListener("click", (e) => {
    e.preventDefault()

    /** Récupérer les valeurs des champs*/
    let imageUrl4 = document.getElementById("image-Url4").value;
    let prenom4 = document.getElementById("value-name4").value;
    let poste4 = document.getElementById("value-poste4").value;
    let description4 = document.getElementById("value-description4").value;



    /**retourner les valeures */
    console.log(imageUrl4);
    imagePrev4.setAttribute("src", imageUrl4);
    dataPrenom4.innerText = prenom4;
    dataPoste4.innerText = poste4;
    console.log(dataDescription4);
    dataDescription4.innerText = description4;

    /**fermetur du formulair*/

    formulaireModif4.style.display = "none";
});


annulation4.addEventListener("click", (e) => {
    formulaireModif4.style.display = "none";
})


const modifButton5 = document.getElementById("modif-card5");
const validerForm5 = document.getElementById("bouton-validation5")
const formulaireModif5 = document.getElementById("form-modif5");
const dataPrenom5 = document.getElementById("prenom5");
const dataPoste5 = document.getElementById("poste5");
const dataDescription5 = document.getElementById("description5");
const annulation5 = document.getElementById("annulation5");
const imagePrev5 =document.getElementById("img-prev5");



modifButton5.addEventListener("click", (e) => {
    formulaireModif5.style.display = "block";
});



validerForm5.addEventListener("click", (e) => {
    e.preventDefault()

    /** Récupérer les valeurs des champs*/
    let imageUrl5 = document.getElementById("image-Url5").value;
    let prenom5 = document.getElementById("value-name5").value;
    let poste5 = document.getElementById("value-poste5").value;
    let description5 = document.getElementById("value-description5").value;



    /**retourner les valeures */
    console.log(imageUrl5);
    imagePrev5.setAttribute("src", imageUrl5);
    dataPrenom5.innerText = prenom5;
    dataPoste5.innerText = poste5;
    console.log(dataDescription5);
    dataDescription5.innerText = description5;

    /**fermetur du formulair*/

    formulaireModif5.style.display = "none";
});


annulation5.addEventListener("click", (e) => {
    formulaireModif5.style.display = "none";
})


const modifButton6 = document.getElementById("modif-card6");
const validerForm6 = document.getElementById("bouton-validation6")
const formulaireModif6 = document.getElementById("form-modif6");
const dataPrenom6 = document.getElementById("prenom6");
const dataPoste6 = document.getElementById("poste6");
const dataDescription6 = document.getElementById("description6");
const annulation6 = document.getElementById("annulation6");
const imagePrev6 =document.getElementById("img-prev6");



modifButton6.addEventListener("click", (e) => {
    formulaireModif6.style.display = "block";
});



validerForm6.addEventListener("click", (e) => {
    e.preventDefault()

    /** Récupérer les valeurs des champs*/
    let imageUrl6 = document.getElementById("image-Url6").value;
    let prenom6 = document.getElementById("value-name6").value;
    let dataPoste6 = document.getElementById("value-poste6").value;
    let description6 = document.getElementById("value-description6").value;



    /**retourner les valeures */
    console.log(imageUrl6);
    imagePrev6.setAttribute("src", imageUrl6);
    dataPrenom6.innerText = prenom6;
    dataPoste6.innerText = poste6;
    console.log(dataDescription6);
    dataDescription6.innerText = description6;

    /**fermetur du formulair*/

    formulaireModif6.style.display = "none";
});


annulation6.addEventListener("click", (e) => {
    formulaireModif6.style.display = "none";
})
