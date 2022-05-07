import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Container,
    FormLogin
} from "./styles";

export function SignIn() {
    const [ email, seEmail ] = React.useState('');
    const [ password, sePassword ] = React.useState('');
    const navigate = useNavigate();

    async function handleSignIn(e) {
        e.preventDefault();

        try {
            const {data} = await axios.post("http://localhost:5500/sign-in", {email, password});
            navigate("/");
        } catch (e) {
            alert("Dados incorretor, Preencha novamente");
        }
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <FormLogin onSubmit={handleSignIn}>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>{
                        seEmail(e.target.value);
                    }}
                    placeholder="E-mail"
                    required
                />
                <input 
                    type="password" 
                    value={password}
                    onChange={(e)=>{
                        sePassword(e.target.value);
                    }}
                    placeholder="Senha"
                    required
                />
                <button type="submit">Entrar</button>
            </FormLogin>

            <Link to={"/sign-up"}>Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}