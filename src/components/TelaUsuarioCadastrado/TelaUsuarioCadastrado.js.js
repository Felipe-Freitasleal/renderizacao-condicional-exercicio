import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <button onClick={()=>props.mudarTela(1)}>Voltar para o Login</button>
        </Div>
    )
}

export default TelaUsuarioCadastrado;