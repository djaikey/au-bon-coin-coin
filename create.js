const modifButton4 = document.getElementById("modif-card4");
const validerForm4 = document.getElementById("bouton-validation4")
const formulaireModif4 = document.getElementById("form-modif4");
const dataPrenom4 = document.getElementById("prenom4");
const dataPoste4 = document.getElementById("poste4");
const dataDescription4 = document.getElementById("description4");
const annulation4 = document.getElementById("annulation4");
const imagePrev4 =document.getElementById("img-prev4");

const boutonAjouter = document.getElementById("ajouter");
boutonAjouter.addEventListener("click", (e) => {
    e.preventDefault()
    const Card4 = document.getElementById("creation4");
    const Card5 = document.getElementById("creation5");
    
    Card4.style.display = "block";
    Card5.style.display = "block";
   
   

})

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
    Card4.style.display = "block";
    Card5.style.display = "none";
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
    Card5.style.display = "block";
    formulaireModif5.style.display = "none";
});


annulation5.addEventListener("click", (e) => {
    formulaireModif5.style.display = "none";
})


;




