
const formulaireModif2 = document.getElementById("form-modif-2")
const formulaireModif3=document.getElementById("form-modif-3")

const modifButton1 = document.getElementById("modif-card-1");
modifButton1.addEventListener("click", (e) => {
    console.log("CLICK!");
    const formulaireModif1 = document.getElementById("form-modif-1")
    formulaireModif1.style.display = "block";
});
    

const modifButton2 = document.getElementById("modif-card-2");
modifButton2.addEventListener("click", (e) => {
    console.log("CLICK!");
});

const modifButton3 = document.getElementById("modif-card-3");
modifButton3.addEventListener("click", (e) => {
    console.log("CLICK!");
});