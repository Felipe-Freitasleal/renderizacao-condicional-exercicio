import {FormContainer, Form, Input, SendButton, StyledLabel} from "./style"

function TelaCadastroEndereco (props) {

    return(
        <FormContainer>
            <h1>Cadastro de endereço</h1>
            <Form action="#">
                <StyledLabel htmlFor="endereco">
                    Diga seu endereço:
                    <Input id="endereco"/>
                </StyledLabel>
                <StyledLabel htmlFor="numero-residencia">
                    Número da residência:
                    <Input id="numero-residencia" />
                </StyledLabel>
                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <Input  id="telefone"/>
                </StyledLabel>
                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento"/>
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
            </Form>
        </FormContainer>
    )
}

export default TelaCadastroEndereco