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
