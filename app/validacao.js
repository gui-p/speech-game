function verificaChute(chute){
    const numero = parseInt(chute);
    if(Number.isNaN(numero)){
        elementoChute.innerHTML += "<div>Valor invalido</div>";
        return;
    }
    
    if(naoEstaDentroRangeNumerico(numero)){
        elementoChute.innerHTML += `<div>Valor inválido, o número precisa estar entre: ${menorValor} e ${maiorValor}</div>`;
        return;
    }else if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era</h3>
            <div id="chute" class="mensagem">
                <span class="box">${numeroSecreto}</span>
            </div>
            <button id="retry"><i class="fa-solid fa-arrow-rotate-left"></i></button>
        `
        const retry = document.getElementById('retry');
        retry.addEventListener('click', ()=>{
            location.reload();
        })

    }else{
        comparaPosicaoRelativaChute(numero);
    }

}

function naoEstaDentroRangeNumerico(numero){
    return !(numero >= menorValor && numero <= maiorValor);
}

function comparaPosicaoRelativaChute(numero){
    let mensagem = "";
    if(numero < numeroSecreto){
        mensagem = "<div>O número secreto é maior <i class='fa-solid fa-angle-up'></i></div>"
    }else{
        mensagem = "<div>O número secreto é menor <i class='fa-solid fa-angle-down'></i></div>"
    }

    elementoChute.innerHTML += mensagem;
}