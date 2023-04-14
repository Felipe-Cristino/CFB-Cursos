const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt)=>{
    let estadoValidacao = f_nota.validity;
    if(estadoValidacao.valueMissing) {
        msg = "Poxa, este campo é obrigatorio";
    }else if(estadoValidacao.rangeOverflow) {
        msg = " Valor maior do que 10";
    }else if(estadoValidacao.rangeUnderflow) {
        msg = " Valor menor do que 0";
    }

    f_msg.innerHTML = msg;
    evt.preventDefault;
});