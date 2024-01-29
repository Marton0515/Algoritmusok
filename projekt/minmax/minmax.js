

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
