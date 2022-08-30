


let numero = Math.random();
numero *= 100;
numero = Math.floor(numero);
numero++;
print(numero);

numero = geraNumero();
print(numero);

let numApostas = 20;
let numDezenas = 6;
let dezenasApostadas = 0;
let apostasRealizadas = 0;
let aposta = "";
let numApostadores = 35;
let valorPremio = 120000000;
while (apostasRealizadas < numApostas) {
    dezenasApostadas = 0;
    aposta = "";
    while (dezenasApostadas < numDezenas) {
        aposta = aposta + geraNumero() + "  ";
        dezenasApostadas++;
    }
    print(aposta);
    apostasRealizadas++;
}
let valor = calculaCusto(numDezenas, numApostas);
print("Este bolão vai custar " + valor.toFixed(2) + " reais.");
print("Cada apostador vai pagar " + (valor / numApostadores).toFixed(2) + " reais.");
print("Cada apostador ganharia " + (valorPremio / numApostadores).toFixed(2) + " reais.");

function calculaCusto(dezenas, apostas) {
    let custo = 0;
    if (dezenas == 6) custo = apostas * 4.5;
    if (dezenas == 7) custo = apostas * 31.5;
    if (dezenas == 8) custo = apostas * 126;
    if (dezenas == 9) custo = apostas * 378;
    if (dezenas == 10) custo = apostas * 945;
    if (dezenas == 11) custo = apostas * 2079;
    if (dezenas == 12) custo = apostas * 4158;
    if (dezenas == 13) custo = apostas * 7722;
    if (dezenas == 14) custo = apostas * 13513.5;
    if (dezenas == 15) custo = apostas * 22522.5;
    return custo;
}

function geraNumero() {
    let numero = Math.random();
    numero *= 60; console.log(numero);
    numero = Math.floor(numero);
    numero++;
    return numero;
}

function cercaCirculo(raio) {
    let cerca = 2 * Math.PI * raio;
    console.log(cerca);
    console.log(Math.floor(cerca));
    console.log(Math.ceil(cerca));
    console.log(Math.round(cerca));
    cerca = Math.ceil(cerca);
    return cerca;
}

function print(texto) {
    document.write(texto + "<br><br>");
}