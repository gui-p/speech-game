const menorValor = 10;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor);

console.log(numeroSecreto)

function gerarNumeroAleatorio(min, max){
    return parseInt(max + (Math.random() * (min - max - 1) + 1));
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;