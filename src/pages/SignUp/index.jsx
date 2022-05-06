import React from "react";
import { 
    Container,
    SignUpForm
} from "./styles";

export function SignUp() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <SignUpForm>
                <input type="text" placeholder="Nome" required/>
                <input type="email" placeholder="E-mail" required/>
                <input type="password" placeholder="Senha" required/>
                <input type="password" placeholder="Confirme a senha" required/>
                <button type="submit">Cadastrar</button>
            </SignUpForm>
        </Container>
    )
}