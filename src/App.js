import styled, {createGlobalStyle} from "styled-components";
import Answers from "./answers";
import Questions from "./questions";
import Title from "./title";
import { useState } from "react";
import questionsContent from "./assets/questionContent";



export default function App() {
  
  function transformArray(){
    for (let i = 0; i < questionsContent.length; i++) {
      questionsContent[i].opened = false
    }
    return questionsContent
  }

  const [questlist, setQuestlistState] = useState(transformArray)


  return (
    <>
      <ThisApp>
        <GlobalStyle/>
        <Title/>
        <Questions questList={questlist} thisState={setQuestlistState}/>
      </ThisApp>
      <Answers questList={questionsContent.length}/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #28223B;
  }
`

const ThisApp = styled.div`
  padding-block: 40px;
  padding-inline: 70px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 630px;
  height: 75vh;
  background-color: #FB6B6B;
`