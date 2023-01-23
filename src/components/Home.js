import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props){

    const { token,setToken } = props
    const [informations, setInformations] = useState([])
    const [user, setUser] = useState("")
    const navigate = useNavigate()

    
    useEffect(() => {

        const config = { 
            headers:{
            authorization: `Bearer ${token}`
            }
        }
    
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/informations`,config)
        promise.then((res) => {
            setInformations(res.data.informations)
            setUser(res.data.user)
            console.log(res.data.user)
        })

        promise.catch((error) => alert(error))

    }, [])


    function exit(){
        if(window.confirm("Tem certeza que deseja sair?")){
            setToken("")
            navigate("/")
        }
    }



    return(
        <Screen>
        <Top>
            <h1>Olá, {user.name}</h1>
            <img onClick={exit} src="assets/exit.svg" alt="exit"/>
        </Top>
        <BoxStyled>
            {
                informations.length===0 ? <NoInformations>Não há registros de entrada ou saída</NoInformations> :
                informations.map((i) => <Information date={i.date} description={i.description} type={i.type} value={i.value}/>)
            }
        </BoxStyled>
        <Base><h2>SALDO</h2><p>{user && Number(user.cash).toFixed(2)}</p></Base>

        <Buttons>

            <Link to="/nova-entrada"> 
                <button>
                    <img src="assets/mais.svg" alt="mais"/>
                    <p>Nova entrada</p>
                </button>
            </Link>

            <Link to="/nova-saida"> 
            <button>
                <img src="assets/menos.svg" alt="menos"/>
                <p>Nova saída</p>
            </button>
            </Link>

        </Buttons>

        </Screen>
    )
}

function Information(props){

    const { date, description, type, value } = props

    return(
        <Data>
            <Description><span>{date}</span>{description}</Description>
            <Value type={type}>{value.replace(".",",")}</Value>
        </Data>
    )
}


const Screen = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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

const Top = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 326px;
    height: 50px;
    margin-top: 15px;

    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: white;
    }

    img{
        width: 23px;
        transition: all linear .1s;
        &:hover{
            width: 27px;
        }
    }
    
`

const BoxStyled = styled.div`
    width: 326px;
    height: 406px;
    background-color: white;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    padding-top: 20px;
    position: relative;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    *{
        font-family: 'Raleway';
        font-size: 16px;
    }
    h1{
        justify-self: center;
        align-self: center;
        text-align: center;
        margin-top: 200px;
        width: 180px;
    }
    Data{
        justify-content: flex-start;
    }
`
const Buttons = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        position: relative;
        width: 155px;
        min-width: 40px;
        height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        transition: all linear .2s;
        cursor: pointer;
        &:hover{
            width: 165px;
            background-color: #741999;
        }

        img{
            position: absolute;
            top: 10px;
            left: 10px;
        }
        p{
            width: 65px;
            display: flex;
            text-align: start;
            flex-wrap: wrap;
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: white;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
        }
    }
    
`

const Data = styled.div`
    width: 326px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
   

`


const Description = styled.div`
    display: flex;
    color: black;
    margin: 10px 0px;
    span{
    color: #C6C6C6;
    margin: 0px 10px;
    }

`

const Value = styled.span`
    color: ${props => props.type==="green"?"green":"red"};
    font-family: 'Raleway';
    margin-right: 10px;
`


const Base = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 326px;
    height: 40px;
    background-color: white;
    border-radius: 0px 0px 5px 5px;
    z-index: 1;
    font-family: 'Raleway';
    font-size: 17px;
    margin-bottom: 13px;
    
    h2{
        color: black;
        margin: 10px;
        font-weight: 700;
    }
    p{
        color: green;
        margin: 10px;
        font-weight: 400;

    }

`

const NoInformations = styled.h1`
    color: #868686;
    display: flex;
    align-self: center;
    justify-self: center;
    text-align: center;
`