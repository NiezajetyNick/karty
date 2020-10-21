const karta = document.querySelector(".karta");
const tresc = document.getElementById("tresc");
const btn = document.querySelector(".btn");
let zmienna = 0;
karta.addEventListener("mouseover", function(){
    if(zmienna==0){
        tresc.className="pokaz";
        zmienna++;
    }else{
        tresc.className="schowaj";
        zmienna--;
    }
    
});
// tresc.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
// karta.addEventListener("click", function(){
//     tresc.style.display="none";
//     tresc.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
// });