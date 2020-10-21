const karta = document.querySelector(".karta");
const tresc = document.getElementById("tresc");
const conc = document.querySelector(".conc");
let zmienna = 0;

const karta2 = document.querySelector(".karta2");
const tresc2 = document.getElementById("tresc2");
const conc2 = document.querySelector(".conc2");
let zmienna2 = 0;

const karta3 = document.querySelector(".karta3");
const tresc3 = document.getElementById("tresc3");
const conc3 = document.querySelector(".conc3");
let zmienna3 = 0;

karta.addEventListener("mouseover", function(){
    if(zmienna==0){
        tresc.className="pokaz";
        tresc.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna++;
    }else{
        tresc.className="schowaj";
        tresc.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna--;
    }
});

karta.addEventListener("mouseleave", function(){
    if(zmienna==0){
        tresc.className="schowaj";
        tresc.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna++;
    }else{
        tresc.className="pokaz";
        tresc.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna--;
    }
});

// ---------------------------------------

karta2.addEventListener("mouseover", function(){
    if(zmienna2==0){
        tresc2.className="pokaz";
        tresc2.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna2++;
    }else{
        tresc2.className="schowaj";
        tresc2.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna2--;
    }
});

karta2.addEventListener("mouseleave", function(){
    if(zmienna2==0){
        tresc2.className="schowaj";
        tresc2.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna2++;
    }else{
        tresc2.className="pokaz";
        tresc2.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna2--;
    }
});

// ---------------------------------------

karta3.addEventListener("mouseover", function(){
    if(zmienna3==0){
        tresc3.className="pokaz";
        tresc3.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna3++;
    }else{
        tresc3.className="schowaj";
        tresc3.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna3--;
    }
});

karta3.addEventListener("mouseleave", function(){
    if(zmienna3==0){
        tresc3.className="schowaj";
        tresc3.style.animation = "wej 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna3++;
    }else{
        tresc3.className="pokaz";
        tresc3.style.animation = "wyj 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        zmienna3--;
    }
});