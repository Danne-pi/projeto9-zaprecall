import styled from "styled-components";
import play from "./assets/play.svg"

function WriteListOfQuestions(){
    const list = [1,2,3,4,5,6,7,8]
    return list.map((item)=>(
    <Question>
        <h3>Pergunta {item}</h3>
        <img src={play} alt=""></img>
    </Question>
    ))
}

export default function Questions() {
    return (
      <ThisQuestions>
        <WriteListOfQuestions/>
      </ThisQuestions>
    );
  }

  const ThisQuestions = styled.div`
    margin-top: 30px;
    border: 2px white dotted;
    width: 100%;
    margin-inline: auto;
    height: 80%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
    width: 0;
    height: 0;
}
  `
  const Question = styled.div`
    background-color: white;
    width: 100%;
    margin-inline: auto;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 24px;
    border-radius: 18px;
    margin-bottom: 12px;

    h3{
        color: #333333;
        font-family: 'Recursive';
    }
  `