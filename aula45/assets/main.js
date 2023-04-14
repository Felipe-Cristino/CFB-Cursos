const cursoSelecionado = document.querySelector(".curso-selecionado");
const removerSelecionado = document.querySelector(".remover-selecionado");
const adicionarAntes = document.querySelector(".adicionar-antes");
const adicionarDepois = document.querySelector(".adicionar-depois");
const novoCurso = document.querySelector("#novocurso");
const secaoDireita = document.querySelector(".secao-direita");
let cursos = ["Html", "Css", "JavaScript", "Phyton", "NodeJs", "MongoDb"];
let indice = 0;

function criarCurso(curso){  

    const a = document.createElement('div');
    a.innerHTML = curso;
    a.setAttribute("id", "c"+indice);
    a.setAttribute("class", "div-cursos");

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    a.appendChild(rb);

    return a;
    
}

cursos.map((el)=>{
    const a = criarCurso(el);
    secaoDireita.appendChild(a);
    indice++;
});

function btnSelecionado() {
    a = document.querySelectorAll("input[type=radio]");
    a = [...a];
    const radioSelecionado = a.filter(el =>{
        if(el.checked) {
            return el;
        }
    });
    return radioSelecionado;
}

cursoSelecionado.addEventListener('click', e =>{
    const a = btnSelecionado();
    alert(a[0].parentNode.innerText);
});


removerSelecionado.addEventListener('click', e =>{
    const a = btnSelecionado();
    a[0].parentNode.remove();
});

adicionarAntes.addEventListener('click', () => {
    const a = btnSelecionado();
    const b = a[0].parentNode;
    const cursoCriado = criarCurso(novoCurso.value);
    secaoDireita.insertBefore(cursoCriado, b);
    indice++;
});

adicionarDepois.addEventListener('click', () => {
    const a = btnSelecionado();
    const b = a[0].parentNode.nextSibling;
    const cursoCriado = criarCurso(novoCurso.value);
    secaoDireita.insertBefore(cursoCriado, b);
    indice++;
});