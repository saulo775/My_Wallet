import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { 
    Container,
    SignUpForm
} from "./styles";

export function SignUp() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const navigate = useNavigate();
    
    async function handleRegisterUser(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5500/sign-up", 
                { username, email, password, passwordConfirmation }
            );

            navigate("/sign-in")
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
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirme a senha" 
                    value={passwordConfirmation} 
                    onChange={(e)=>{
                        setPasswordConfirmation(e.target.value);
                    }}
                    required
                /> 
                <button type="submit">Cadastrar</button>
            </SignUpForm>
            <Link to={"/sign-in"}>Já tem uma conta? Entre agora</Link>
        </Container>
    );
}