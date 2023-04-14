import { Cxmsg } from "../cxmsg.js"

const config = {
    cor: "#48f",
    tipo: "sn", //tipos: ok, sn
    
    comando_sn:()=>{

    }
}

const fsim=()=>{
    console.log('Botão sim pressionado');
}

const btn_mostrarcxmsg = document.querySelector('#btn_mostrarcxmsg');

btn_mostrarcxmsg.addEventListener("click", ()=>{
    config.comando_sn = () => {fsim();}
    Cxmsg.mostrar(config, "CFB Cursos", "Curso de Javascript");
});