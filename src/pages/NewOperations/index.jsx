import axios from "axios";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import {Container, FormOperation} from "./styles";

export function NewOperations() {
    const [amount, setAmount] = React.useState(undefined);
    const [description, setDescription] = React.useState('');
    
    const {type} = useParams();
    const param = type.replace(":type=", "");
    const { token } = React.useContext(UserContext);
    const navigate = useNavigate();
    
    let typeOperation = ""

    if (param === "exit") {
        typeOperation = "Saída";
    }else{
        typeOperation = "Entrada";
    }

    function handleSaveNewOperation(e) {
        e.preventDefault();
        const promise = axios({
            method: "post",
            url: "http://localhost:5500/new-operation",
            data: {
                amount,
                description,
                type: param
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        promise.then((response)=>{
            console.log(response);
            navigate("/");
            
        });

        promise.catch((e)=>{
            console.log(e);
            alert("Não foi possível salvar sua operação");
        })
    }

    return token ? 
        <Container>
            <h2>Nova {typeOperation}</h2>
            <FormOperation onSubmit={handleSaveNewOperation}>
                <input
                    type="number"
                    value={amount}
                    onChange={({target})=>{
                        setAmount(target.value);
                    }}
                    placeholder={"Valor"}
                    required
                />

                <input 
                    type="text" 
                    value={description}
                    onChange={({target})=>{
                        setDescription(target.value);
                    }}
                    placeholder={"Descrição"}
                    required
                />

                <button>Salvar {typeOperation}</button>
            </FormOperation>

        </Container> : <Navigate to={"/sign-in"}/>
    
}