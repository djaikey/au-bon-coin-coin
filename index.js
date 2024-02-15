window.onload = function()
{
	var canards_groupe = document.getElementById("canards_groupe");
	largeur_ecran();
	window.onresize = function() { largeur_ecran(); }
	document.querySelectorAll("form").forEach(e => e.addEventListener("submit", function (e) 
	{
		e.preventDefault();
		envoi(e.target,e.target.id);
	}));
}

var nb_articles = 0;

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

function envoi(qte,id)
{
	var formData = new FormData(qte);

	for (var pair of formData.entries())
	{
		ajouter(pair[1],id);
	}
}

function ajouter(qte,type)
{
	nb_articles++;
	var vollet = document.getElementById("vollet");
	var panier = document.getElementById("panier");
	console.log(nb_articles);
	if (vollet.style.display == "none" && !panier.hasChildNodes())
	{
		vollet.style.display = "table-cell";
	}

	var article = type.substr(6);
	var nom = 'Canard ';
	if (nb_articles > 1)
	{ panier.innerHTML = panier.innerHTML+"<hr noshade=\"noshade\" size=\"2px\" color=\"white\">" }
	if (article == "affaire")
	{ nom = "Canard d'"; }
	if (article == "piou")
	{ nom = "Le poussin "; }
	panier.innerHTML = panier.innerHTML+"<div style=\"width:100%\"><img src=\"asset/"+article+".png\" class=\"bordure\" width=\"144px\" height=\"135px\" alt=\""+nom+article+"\" /><div><p>"+nom+article+"</p><p>Quantité "+qte+"</p></div></div>";
	console.log(article);
}

/*

				<div style="width:100%">
					<img src="asset/article1.png" alt="Canard savant" />
					<div>
						<p>Canard savant</p>
						<p>Quantité X</p>
					</div>
				</div>
				<hr noshade="noshade" size="2px" color="white">
				<div style="width:100%">
					<img src="asset/article1.png" alt="Canard savant" />
					<div>
						<p>Canard savant</p>
						<p>Quantité X</p>
					</div>
				</div>
*/