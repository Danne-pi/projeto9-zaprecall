import styled from "styled-components";



export default function Answers() {
    return (
      <ThisAnswers>
        <Buttons>
            <button className="b1">Nao lembrei</button>
            <button className="b2">Quase nao lembrei</button>
            <button className="b3">Zap!</button>
        </Buttons>
        <h2>0/4 CONCLUIDOS</h2>
      </ThisAnswers>
    );
  }

  const ThisAnswers = styled.div`
    height: 20vh;
    width: 100%;
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{

    }
  `
  const Buttons = styled.div`
    display: flex;
    width: 60%;
    margin-inline: auto;
    justify-content: space-evenly;

    button{
        color: white;
        border: none;
        border-radius: 9px;
        width: 100px;
        height: 50px;
    }
    .b1{background-color: #FF3030;}
    .b2{background-color: #FF922E;}
    .b3{background-color: #2FBE34;}
  `