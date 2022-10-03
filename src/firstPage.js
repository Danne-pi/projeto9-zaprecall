import styled from "styled-components"
import logo from "./assets/logo.svg"

export default function FirstPage(props){
    return <ThisPage>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
        <button data-identifier="start-btn" onClick={()=>props.showPage(false)}>Iniciar Recall!</button>
    </ThisPage>
}

const ThisPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-block: 40px;
    padding-inline: 70px;
    border-radius: 20px;
    width: 630px;
    height: 95vh;
    background-color: #FB6B6B;
    z-index: 50;

    img{
        height: 250px;
        width: 220px;
    }
    h1{
        font-family: 'Righteous';
        font-size: 52px;
        color: white;
        letter-spacing: 1px;
    }
    button{
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        width: 250px;
        height: 50px;
        background-color: white;
        color: #D70900;
        border: 1px solid #D70900;
        border-radius: 5px;
    }
    
`