import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")



    return(
        <Screen>
            <Title>MyWallet</Title>
            <Form>

                <input
                type="text"
                required
                value={name}
                onChange={e=> setName(e.target.value)} 
                placeholder="Nome"
                />

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
                placeholder="Senha"
                />

                <input
                type="password"
                required
                value={passwordConfirm}
                onChange={e=> setPasswordConfirm(e.target.value)} 
                placeholder="Confirme a senha"
                />

                <button type="submit">Cadastrar</button>
            </Form>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>

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
    }
    a{
        text-decoration: none;
    }
`

const Title = styled.h1`
    font-family: 'Saira Stencil One';
    margin: 95px 0px 24px 0px;
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