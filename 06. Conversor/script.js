const valor = document.getElementById('valor');
const resultado = document.getElementById('resultado');
const unidad1 = document.getElementById('unidad1');
const unidad2 = document.getElementById('unidad2');

valor.addEventListener('keyup', convertir);
unidad1.addEventListener('change', convertir);
unidad2.addEventListener('change', convertir);

let final;

function convertir (){
    if (valor.value == ""){
        return ""
    }
    number = valor.value;
    number = parseFloat(number);

    if (unidad1.value == "Kilometros" && unidad2.value == "Kilometros"){
        final = number * 1
        resultado.innerHTML = number + " Kilometros equivalen a " + final + " Kilometros"
    }

    if (unidad1.value == "Metros" && unidad2.value == "Metros"){
        final = number * 1
        resultado.innerHTML = number + " Metros equivales a" + final + " Metros"
    }

    if (unidad1.value == "Centimetros" && unidad2.value == "Centimetros"){
        final = number * 1
        resultado.innerHTML = number + " Centimetros equivales a" + final + " Centimetros"
    }
}


