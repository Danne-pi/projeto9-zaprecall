import styled from "styled-components";
import logo from "./assets/logo.svg"



export default function Title() {
    return (
      <ThisTitle>
        <img src={logo} alt=""></img>
        <h1>ZapRecall</h1>
      </ThisTitle>
    );
  }

  const ThisTitle = styled.div`
    width: 90%;
    margin-inline: auto;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 70px;
        width: 70px;
    }
    
    h1{
        margin-left: 4px;
        font-family: 'Righteous';
        font-size: 52px;
        color: white;
        letter-spacing: 1px;
    }
  `