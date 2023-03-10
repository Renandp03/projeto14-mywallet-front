import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"

export default function Entry(props){

    const [ value, setValue ] = useState("")
    const [ description, setDescription ] = useState("")
    const navigate = useNavigate()

    function sendEntry(event){
        event.preventDefault()

        const { token } = props


        if(isNaN(value)||description.length===0){
            return alert("Dados incompatíveis")
        }

        const config = { 
            headers:{
            authorization: `Bearer ${token}`
            }
        }
        const newEntry = {
            date:dayjs(Date.now()).format("DD/MM"),
            description,
            type:"green",
            value
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/informations`,newEntry,config)
        promise.then(()=> {
            alert("Depósito feito com sucesso")
            navigate("/home")})
        promise.catch(error => alert(error.message))


    }



    return(
        <Screen>
            <Top><h1>Nova entrada</h1></Top>


            <Form onSubmit={sendEntry}>

                <input
                    type="number"
                    required
                    value={value}
                    onChange={e=> setValue(e.target.value)} 
                    placeholder="Valor"
                />

                <input
                    type="text"
                    required
                    value={description}
                    onChange={e=> setDescription(e.target.value)} 
                    placeholder="Descrição"
                />

                <button type="submit">Salvar entrada</button>

            </Form>

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
        cursor: pointer;
        transition: all linear .2s;
        &:hover{
            background-color:#741999
        }
    }

    
`

const Top = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 326px;
    height: 50px;
    margin: 15px 0px;

    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: white;
    }
    
`
