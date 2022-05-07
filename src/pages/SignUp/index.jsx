import axios from "axios";
import React from "react";

import { 
    Container,
    SignUpForm
} from "./styles";

//const SIGNUP_URL = "localhost:5500/sign-up";


export function SignUp() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

    async function handleRegisterUser(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5500/sign-up", 
                { username, email, password, passwordConfirmation }
            );
        } catch (e) {
            if(e.response.status === 409){
                alert("Usuário já cadastrado");
            }else if(e.response.status === 422){
                alert("Dados incorretos");
            }else{
                console.log(e);
            }
        }
    }


    return (
        <Container>
            <h1>MyWallet</h1>
            <SignUpForm onSubmit={handleRegisterUser}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={username} 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    required 
                />
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Confirme a senha" 
                    value={passwordConfirmation} 
                    onChange={(e)=>{
                        setPasswordConfirmation(e.target.value);
                    }}
                    required
                /> 
                <button type="submit">Cadastrar</button>
            </SignUpForm>
        </Container>
    )
}