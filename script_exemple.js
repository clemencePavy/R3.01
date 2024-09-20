let titre = document.getElementById('titre');
titre.textContent="Nouveau titre"

for(int i=0; i<= 5; i++) {
    titre.textContent+= " "+i
}

//document.write(typeof(titre)) -- a éviter