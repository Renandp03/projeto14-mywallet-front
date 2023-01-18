import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home(){
    return(
        <Screen>
        <Top>
            <h1>Olá,Fulano</h1>
            <img src="assets/exit.svg" alt="exit"/>
        </Top>
        <Box>

        </Box>

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

const Box = styled.div`
    width: 326px;
    height: 446px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 13px;
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