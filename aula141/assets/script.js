import { Login } from "./login.js"
import { Cxmsg } from "./cxmsg.js"

const callback_ok =()=>{
    
}

const callback_naook=()=>{
    const config = {
        cor: "#800",
        tipo: "sn",
        textos: null,
        comando_sn: null
    }

    Cxmsg.mostrar(config, "Erro", "Login não efetuado! Usuario ou senha incorretos.");
}

Login.login(callback_ok, callback_naook);