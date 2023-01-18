import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return(
        <Screen>
            <Title>MyWallet</Title>
            <Form>

                <input
                type="email"
                required
                value={email}
                onChange={e=> setEmail(e.target.value)} 
                placeholder="E-mail"
                />

                <input
                type="password"
                required
                value={password}
                onChange={e=> setPassword(e.target.value)} 
                placeholder="password"
                />

                <button type="submit">Entrar</button>
            </Form>
            <Link to="/cadastro"><p> Primeira vez?Cadastre-se!</p></Link>
            

        </Screen>
    )
}

const Screen = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        color: white;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        font-family: 'Raleway';
        text-decoration: none;
    }
    a{
        text-decoration: none;
    }
`


const Title = styled.h1`
    font-family: 'Saira Stencil One';
    margin: 160px 0px 24px 0px;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: white;
`

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;

    input{
        color: black;
        background-color: white;
        width: 326px;
        height: 58px;
        border: none;
        border-radius: 5px;
        padding: 0px 15px;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 13px;
    }
    input::placeholder {
            color: black;
        }


    button{
        width: 326px;
        height: 46px;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #A328D6;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 36px;
        transition: all linear .2s;
        &:hover{
            background-color:#741999
        }
    }

    
`