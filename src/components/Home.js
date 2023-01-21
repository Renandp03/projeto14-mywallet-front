import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(props){

    const [informations, setInformations] = useState([])
    const [name, setName] = useState("")

    
    useEffect(() => {

        const { token } = props
        const config = { 
            headers:{
            authorization: `Bearer ${token}`
            }
        }
    
        const promise = axios.get("http://localhost:5000/informations",config)
        promise.then((res) => {
            setInformations(res.data.informations)
            setName(res.data.user.name)
        })

        promise.catch((error) => alert(error))

    }, [])





    return(
        <Screen>
        <Top>
            <h1>Olá, {name}</h1>
            <Link to="/"><img src="assets/exit.svg" alt="exit"/></Link>
        </Top>
        <BoxStyled>

            {informations.map((i) => <Information date={i.date} description={i.description} type={i.type} value={i.value}/>)}

            <Base><h1>SALDO</h1><p>2849,96</p></Base>
        </BoxStyled>

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
            <Value type={type}>{value}</Value>
        </Data>
    )
}



const Screen = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 375px;
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
    
`

const BoxStyled = styled.div`
    width: 326px;
    height: 446px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 13px;
    box-sizing: border-box;
    padding-top: 20px;
    position: relative;
    overflow-y: scroll;
    *{
        font-family: 'Raleway';
        font-size: 16px;
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
        height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        transition: all linear .2s;
        &:hover{
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
    background-color: white;
    z-index: 1;
    font-size: 17px;
    position: absolute ;
    bottom: 0px;
    left: 0px;
    h1{
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