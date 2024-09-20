//exemple ------------------------------------------------------------------------------------------

let titre = document.getElementById('titre');
titre.textContent="Exemple"

for(let i=0; i<= 5; i++) {
    titre.textContent+= " "+i
}

//document.write(typeof(titre)) -- a éviter


//exercice 1 ---------------------------------------------------------------------------------------

let celsius = 20;
let ex1 = document.getElementById('ex1');
ex1.textContent="Celsius : " + celsius

let fahrenheit = celsius*9/5 + 32
ex1.textContent += ", Fahrenheit : " + fahrenheit

//exercice 2 ---------------------------------------------------------------------------------------

let long = 10;
let larg = 5;
let air = long*larg;
let ex2 = document.getElementById("ex2");
ex2.textContent="Longueur : " + long + " -- Largeur : " + larg + " -- Air du rectangle : " + air

//exercice 3 ---------------------------------------------------------------------------------------

let nom = "Michaelis"
let prenom = "Sébastian"
let chaine = prenom + " " + nom
let ex3 = document.getElementById('ex3');
ex3.textContent = chaine

//exercice 4 ---------------------------------------------------------------------------------------

let HT = 10
let TVA = 0.20
let TTC = HT + HT*TVA
let ex4 = document.getElementById('ex4')
ex4.textContent = "montant HT = " + HT + " -- montant TVA = " + TVA*100 + "% -- montant TTC = " + TTC

//exercice 5 ---------------------------------------------------------------------------------------

let boolean = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)
let ex5 = document.getElementById('ex5')
ex5.textContent = "vrai ou faux : " + boolean

//exercice 6 ---------------------------------------------------------------------------------------

let poids = 50 //en kilogrammes
let taille = 1.70 //en mètre
let IMC = poids / (taille * taille) //IMC = Indice de Masse Corporelle
let ex6 = document.getElementById('ex6')
ex6.textContent = "Indice de Masse Corporelle (IMC) = " + IMC.toFixed(2)

//exercice 7 ---------------------------------------------------------------------------------------

const montant_min_commande = 20;
let montant_total_commande = 50;
let ex7 = document.getElementById('ex7')
if(montant_total_commande >= montant_min_commande) {
    ex7.textContent = "Livraison Gratuite !!"
} else {
    ex7.textContent = "Frai de livraison : 3 euros"
}

//exercice 8 ---------------------------------------------------------------------------------------

let nombreBinaire = "1101"
let converti = parseInt(nombreBinaire,10)
let convertiDecimal = parseInt(nombreBinaire,2)
let ex8 = document.getElementById('ex8')
ex8.textContent = "Binaire = " + converti + ", Decimal = "+ convertiDecimal

//pierre - papier - ciseaux ------------------------------------------------------------------------

let joueur1 = "pierre";
let aleatoire = Shifoumi();
let shifoumi_1 = document.getElementById('shifoumi_1');
let shifoumi_2 = document.getElementById('shifoumi_2');
shifoumi_1.textContent = "Je joue : " + joueur1
shifoumi_2.textContent = Shifoumi()

function Shifoumi(element) {
    let min = -1;
    let max = 1;
    let result = Math.floor( Math.random() * (max - min + 1) ) + min;
    let text = document.getElementById('resultat');
    let newP = document.createElement('p');
    newP.textContent = "test"
    text.prepend(newP);

    /**let b = document.body;
let newP = document.createElement('p');
let newTexte = document.createTextNode('Texte écrit en JavaScript');

newP.textContent = 'Paragraphe créé et inséré grâce au JavaScript';

//Ajoute le paragraphe créé comme premier enfant de l'élément body
b.prepend(newP);

//Ajoute le texte créé comme dernier enfant de l'élément body
b.append(newTexte); */

    if(result == 1) {
        return "J'ai gagner !!";
    } if(result == 0) {
        return "Egalité !!"
    } else {
        return "J'ai perdu."
    }
}

function Piece(i, element) {
    if(element == "Pierre") {
        if(i == 1) 
            return "Ciseau"
        if(i == 0) 
            return "Pierre"
        else return "Feuille"
    }
    if(element == "Feuille") {
        if(i == 1) 
            return "Pierre"
        if(i == 0) 
            return "Feuille"
        else return "Ciseau"
    }
    if(element == "Ciseau") {
        if(i == 1) 
            return "Feuille"
        if(i == 0) 
            return "Ciseau"
        else return "Pierre"
    }
    return null;
}


