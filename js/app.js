
// Se crea el mapa con los valores por defecto para los números
let numbersIndex = {
    '1' : ['t', 'd'],
    '2' : ['n', 'ñ'],
    '3' : ['m'],
    '4' : ['c', 'q', 'k'],
    '5' : ['l'],
    '6' : ['s', 'z'],
    '7' : ['f'],
    '8' : ['ch'],
    '9' : ['v', 'b', 'p'],
    '0' : ['r']
};

// Convertimos el objeto a un mapa para recorrelo
let numberMap = new Map(Object.entries(numbersIndex));

// Obtemenos el numero a convertir a letras
let number = document.getElementById('inputNumber');


// Función que se ejecuta al darle submit a un número, recibe el id de la tabla que corresponde al formulario
function submitNumber(tableId) {

    // Obtenemos el elemento por su ID
    let currentTable = document.getElementById(tableId);

    // Convertimos el número a string para poder acceder a cada dígito
    let numberString = number.value.toString();
    let size = numberString.length;

    // Inicializamos variables para el html a insertar
    let table = "";
    let tableBody = "";
    let tableHead = "";


    //  Se colocan columnas para el head con los números
    //  y para el body con las consonantes para cada dígito y ademas
    //  se colocan columnas intermedias con inputs para las vocales

    let count = 0;
    while(count < size) {

        let currentDigit = numberString.charAt(count); // Obtenemos el dígito actual

        let letters = numberMap.get(currentDigit);   //Obtenemos el array de las letras correspondientes al dígito actual
            
        // Creamos una columna para la cabecera agregando un espacio para los inputs del body para vocales
        tableHead += 
            '<td></td>' +
            '<td>' + currentDigit + '</td>'
        ;

        // Creamos divs para cada letra correspondiente al dígito actual 
        let lettersHtml = "";
        letters.forEach(function(letter) {
            lettersHtml += "<div>" + letter + "</div>";
        });

        // Creamos una columna para las letras correspondientes al dígito actual
        // y se adiciona un input antes para vocales
        tableBody += 
            '<td><input class="form-control vowels"></td>' +
            '<td>' + 
                lettersHtml +
            '</td>'
        ;

        count++;
    }

    //  Se agrega una columna extra para la última o últimas vocales
    tableHead += '<td></td>';
    tableBody += '<td><input class="form-control vowels"></td>';

    // Se arma la tabla con el head y el body armado previamente
    table = 
        '<table class="table">' +
            '<thead>'           +
                '<tr>'          +
                    tableHead   +
                '</tr>'         +
            '</thead>'          +
            '<tbody>'           +
                '<tr>'          +
                    tableBody   +
                '</tr>'         +
            '</tbody>'          +
        '</table>'
    ;

    currentTable.innerHTML = table; // Agrega la tabla al pagina dentro del div identificado con el ID
    

}