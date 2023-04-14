import { Cxmsg } from "./cxmsg.js"

const config = {
    cor: "#080"
}

Cxmsg.config(config);

timer = document.getElementById("timer");
btn_iniciar = document.getElementById("btn_iniciar");
btn_pausar = document.getElementById("btn_pausar");
btn_zerar = document.getElementById("btn_zerar");

let tempoInicial = null;
let intervalo;
let tempoPausado = null;
let segundos = 0;


function contador(){
    const tempoAtual = Date.now();
    let diferenca = tempoAtual - tempoInicial;
    segundos = Math.floor(diferenca/1000);
    timer.innerHTML = mostraHora(segundos);
}

function inicia() {
    intervalo = setInterval(contador, 1000);
}


function mostraHora(segundos){
    let hora = Math.floor(segundos/3600);
    let resto = segundos % 3600;
    let min = Math.floor(resto / 60);
    let seg = resto % 60;
    const tempoFormatado = (hora<10? "0" + hora:hora) + ":"+ (min<10? "0" + min:min) + ":" + (seg<10? "0"+ seg:seg);
    
    return tempoFormatado;
}

btn_iniciar.addEventListener("click", e=>{
    clearInterval(intervalo);
    tempoInicial = Date.now() - tempoPausado;
    inicia();
});

btn_pausar.addEventListener("click", e=>{
    clearInterval(intervalo);
    tempoPausado = segundos*1000;
    console.log(tempoPausado);
});

btn_zerar.addEventListener("click", e=>{
    clearInterval(intervalo);
    timer.innerHTML = "00:00:00";
    tempoPausado = null;
    Cxmsg.mostrar("Cronometro", "O cronometro foi zerado");
    
});