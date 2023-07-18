const elementoChute = document.getElementById("chute");
const btnMicrofone = document.getElementById("btn-microfone")
const audioClick = document.querySelector("#audio-click")
audioClick.volume = 0.2;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'



btnMicrofone.addEventListener('click', ()=>{
    recognition.start();
    audioClick.play();
})

recognition.addEventListener('result', e => {
    let chute = e.results[0][0].transcript
    exibeChuteTela(chute);
    verificaChute(chute);
});

function exibeChuteTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse<div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start();
})