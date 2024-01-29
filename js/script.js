
const gyumolcsok = document.querySelectorAll(".gyumolcs");
let gyumolcsInput = document.querySelector(".gyumiInp");
let selectedGyumiIndex = document.querySelector(".selectedGyumiIndex");

function changeBackGyuminStyles (gyumin) {
  // Lista elem
  gyumin.style.backgroundColor = "#fff";
  gyumin.style.color = "#000";
  gyumin.style.padding = "0%";
  gyumin.style.width = "auto";
  gyumin.style.border = "0px solid red";
  gyumin.style.borderRadius = "0px";
  gyumin.style.fontWeight = "normal";

  // Lista Elem Indexe
  selectedGyumiIndex.style.backgroundColor = "#fff";
  selectedGyumiIndex.style.color = "#000";
  selectedGyumiIndex.style.padding = "0%";
  selectedGyumiIndex.style.border = "0px solid red";
  selectedGyumiIndex.style.borderRadius = "0px";
  selectedGyumiIndex.style.fontWeight = "normal";

  // Kiválasztott Elem Indexe
  selectedGyumiIndex.innerHTML = "";
}


function modifySelectedGyuminStyles (gyumin, index) {
  // Lista elem
  gyumin.style.color = "red";
  gyumin.style.padding = "0.5%";
  gyumin.style.width = "fit-content";
  gyumin.style.border = "2px solid red";
  gyumin.style.borderRadius = "6px";
  gyumin.style.fontWeight = "bold";

  // Lista Elem Indexe
  selectedGyumiIndex.style.color = "red";
  selectedGyumiIndex.style.padding = "0.5%";
  selectedGyumiIndex.style.border = "2px solid red";
  selectedGyumiIndex.style.borderRadius = "6px";
  selectedGyumiIndex.style.fontWeight = "bold";

  // Kiválasztott Elem Indexe
  selectedGyumiIndex.innerHTML = index + 1;
}


gyumolcsInput.addEventListener("input", () => {

  gyumolcsok.forEach(gyumin => {
    if (gyumolcsInput.value.toLowerCase() !== gyumin.innerHTML.toLowerCase()) {
      changeBackGyuminStyles(gyumin);
    }
  })

  gyumolcsok.forEach((gyumin, index) => {
    if (gyumolcsInput.value.toLowerCase() === gyumin.innerHTML.toLowerCase()) {
      modifySelectedGyuminStyles(gyumin, index);
    }
  })
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findMinMaxAndDisplay() {
      var lista = [0,0,0,0,0,0,0,0,0,0,0];

      for (let i = 0; i < lista.length; i++) {
          lista[i] = getRandomNumber(1, 100);
      }
  

      for (let i = 0; i < lista.length;i++){
          document.write(lista[i]+" ")
      }


  let min = lista[0];
  let max = lista[0];

  for (let i = 1; i < lista.length-1;i++){
      if (min>lista[i]){
          min = lista[i]
      }
      if(max<lista[i]){
          max = lista[i]
      }
  }

  console.log(min+ " "+ max) 

  document.write('<p>Legkisebb szám: ' + min + '</p>');
  document.write('<p>Legnagyobb szám: ' + max + '</p>');
}


findMinMaxAndDisplay();

var db = 0;
var dobasokTomb = [];
var stat = [0,0,0,0,0,0];

function dobas(){
    var ertek = Math.floor(Math.random()*6+1)
    document.querySelector("#dobas").innerHTML = ertek;
    db++;
    dobasokTomb.push(ertek);
    document.querySelector("#dobasDB").innerHTML = db;
    
    if(db==1){
        document.querySelector("#dobasok").innerHTML = ertek + " ";
    }else{
        document.querySelector("#dobasok").innerHTML += ertek + " ";
    }

    kiir();
}

function kiir(){
    for(let i=0; i<dobasokTomb.length; i++){
        document.querySelector("#tomb").innerHTML += dobasokTomb[i] + " ";
    }
}

function rendezBuborek(){
    let segedValtozo = 0;
    for(let i = dobasokTomb.length-1; i>1; i--){
        for(let j = 0; j<=i-1; j++){
            if(dobasokTomb[j]>dobasokTomb[j+1]){
                segedValtozo = dobasokTomb[j];
                dobasokTomb[j] = dobasokTomb[j+1];
                dobasokTomb[j+1] = segedValtozo;
            }
        }
    }
    kiir();
}
