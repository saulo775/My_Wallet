import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import { RiLogoutBoxRLine } from "react-icons/ri";
import {
    MdAddCircleOutline,
    MdOutlineRemoveCircleOutline
} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";

import {
    Container,
    ContainerRegister,
    OperationContent,
    ContainerButtons,
    Button,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

export function Dashboard() {
    const [allFinances, setAllFinances] = React.useState([]);
    const [total, setTotal] = React.useState();
    const { token, username } = React.useContext(UserContext);

    const navigate = useNavigate();

    React.useEffect(() => {
        const promise = axios.get("https://mywallet-api-saulo.herokuapp.com/", {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        promise.then(({ data }) => {
            let soma = 0
            setAllFinances(data);
            data.forEach((item)=>{
                if (item.type === "exit") {
                    soma = soma - item.amount;
                }else {
                    soma = soma + item.amount;
                }
            });

            setTotal(soma);
        })
        promise.catch((e) => {
            console.log(e);
        });
    }, [token, total]);

    function handleCreateNewOperation(type) {
        navigate(`/new-operation:type=${type}`)
    }

    function handleLogout() {
        const promise = axios({
            method: "POST",
            url: "https://mywallet-api-saulo.herokuapp.com/logout",
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        promise.then((response)=>{
            console.log(response);
            navigate("/sign-in");
        });

        promise.catch((e)=>{
            console.log(e);
        })
    }

    function handleDeleteOperation(id) {
        const confirmDelete = window.confirm("Tem certeza que quer excluir?");
        if (confirmDelete) {
            const promise = axios({
                method: "DELETE",
                url: "https://mywallet-api-saulo.herokuapp.com/",
                headers: {
                    _id: id
                }
            });
    
            promise.then((response)=>{
                setTotal(0)
                console.log(response);
            })
            promise.catch((e)=>{
                alert("Não foi possível deletar a operacão!");
                console.log(e);
            });
        }else {
            return
        }
    }

    const finances = allFinances.map((operation)=>{
        return (
            <OperationContent key={operation._id}>
                <div>
                    <p>{operation.date}</p>
                    <h3 
                        style={{cursor: "pointer"}}
                    >{operation.description}
                    </h3>
                </div>
                <div>
                    <h3 className={operation.type}>
                        {operation.amount},00
                    </h3>
                    <AiOutlineClose onClick={()=>{
                        handleDeleteOperation(operation._id, operation.amount);
                    }}/>
                </div>
            </OperationContent>
        );
    });

    return token ? 
        <Container>
            <header>
                <h2>Olá, {username}</h2>
                <RiLogoutBoxRLine onClick={handleLogout}/>
            </header>

            <ContainerRegister>
                <div className="finances">
                    { 
                        finances.length === 0
                        ? <h4>Não há registros de entrada ou saída</h4>
                        : finances 
                    }
                </div>
                {
                    finances.length === 0
                    ? <></>
                    : <div className="total">
                        <h2>SALDO</h2>
                        <h2
                            className={total>0 ? "green": "red"}
                        >{total},00</h2>
                    </div>
                } 
                
            </ContainerRegister>

            <ContainerButtons>
                <Button onClick={()=>{
                    handleCreateNewOperation("entry")
                }}>
                    <MdAddCircleOutline />
                    <h2>Nova <br />Entrada</h2>
                </Button>
                <Button onClick={()=>{
                    handleCreateNewOperation("exit")
                }}>
                    <MdOutlineRemoveCircleOutline />
                    <h2>Nova <br />Saída</h2>
                </Button>
            </ContainerButtons>
        </Container>
        : <Navigate to={"/sign-in"}/>
}