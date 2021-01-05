let input = document.getElementById("botonMenu");
let ul = document.getElementById("menu");
let bio = document.getElementById("bio");

input.addEventListener("click",menu);

function menu(){
    ul.classList.toggle("activo");
    
}