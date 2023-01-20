//ici on va entrer la valeur que l'on veux tester pour voir si l'expresion(mot de passe par exemple) comporte bien ce qu'il y a entre parenthèses
const mdp = "Ghtyj,Klm"
const regExp = new RegExp('k') 

// on teste ça dans la console avec la méthode .test() et on prend la variable regExp (car il transforme tout en code regExp)
console.log(regExp.test(mdp));
//ça affichera true ou false

//--------------------------------------------//
//faire fonctionner le bouton submit (recherche)
/*
//On récupère l'input (nom film) inscrit dans la barre de recherche
const barreRech = document.getElementById('movie-name');
let nomFilm = "";
barreRech.addEventListener('input', (e) => {
nomFilm = e.target.value
});
//ceci s'ajoutera après le premier film etc etc etc...
document.querySelector('.film').innerHTML += `
<h1>${nomFilm}</h1>
`
*/
//Methode promise, qui permet de faire passer le code même si il est faux à certains endroit. On va ejecter les codes qui marche pas et faire fonctionner les code qui marchent sans stoper tout le code.
/*
const promise = new Promise(function(resolve, reject){
    resolve('sa passe')
    reject("sa passe pas")
});
promise
.then((resultat) => {
    console.log(resultat); //donne sa passe
}).catch((err) => {
    console.log(err);// sa passe pas
});
*/
//------------------------------------------------------------//
//Ici on va utiliser le site OMDb API pour rechercher les films
//On récuperera .Title / .Released / .Poster

const form = document.querySelector("#movieform")
const list = document.querySelector('#list');
let nomDuFilm = "";


form.addEventListener('submit', (e) => { 
  e.preventDefault() 

    const nomDuFilm = form.elements['movie'].value     
    const urlApi = `http://www.omdbapi.com/?apikey=c87e508d&t=${nomDuFilm}&plot=full`
    
fetch(urlApi)
    .then((response) => response.json()    
    .then((data) => { 
      console.log(data);
        list.innerHTML = "";

        let afficheFilm = `<div class="film"> <img src="${data.Poster}" alt="" class = "image";>
        <h2 class="boxmovie" id="h3">${data.Title}</h2>   
       <p style = "font-family: Arial, Helvetica, sans-serif;">${data.Released}</p>    
       <!-- Trigger/Open The Modal -->
       <button id="btn-1" class = "btn-1">description</button>
       
       <!-- The Modal -->
       <div id="myModal" class="modal">
       
         <!-- Modal content -->
         <div class="modal-content">
           <span class="close">&times;</span>
           <img src="${data.Poster}" alt="" class = "image";>
        <h2 class="boxmovie" id="h3">${data.Title}</h2>   
       <p style = "font-family: Arial, Helvetica, sans-serif;">${data.Released}</p>
           <p style = "font-family: Arial, Helvetica, sans-serif;">${data.Plot}</p>
         </div>
       `;  
        list.innerHTML += afficheFilm

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn-1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    }))
    .catch((err) => console.log("Ceci n\'est pas correct" + err));    
});

 


