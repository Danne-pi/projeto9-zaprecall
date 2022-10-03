import styled, {createGlobalStyle} from "styled-components";
import Answers from "./answers";
import Questions from "./questions";
import Title from "./title";
import { useState } from "react";
import questionsContent from "./assets/questionContent";
import FirstPage from "./firstPage";



export default function App() {
  
  function transformArray(){
    for (let i = 0; i < questionsContent.length; i++) {
      questionsContent[i].state = 0
      questionsContent[i].actQuest = false
    }
    return questionsContent
  }

  const [questlist, setQuestlistState] = useState(transformArray)
  const [questionCounter, setQuestionCounter] = useState(0)
  const [answersCount, setAnswersCount] = useState([0,0,0,0,0,0,0,0])
  const [showFirstPage, setShowFirstPage] = useState(true)



  return (
    <>
      {showFirstPage ? <FirstPage showPage={setShowFirstPage}/> : null}
      <ThisApp>
        <GlobalStyle/>
        <Title/>
        <Questions 
        questList={questlist} 
        thisState={setQuestlistState} 
        actQuest={questionCounter}
        setActQuest={setQuestionCounter}
        answerList={answersCount}
        />
      </ThisApp>
      <Answers 
      questList={questlist} 
      thisState={setQuestlistState} 
      setAnswersCount={setAnswersCount}
      actQuest={questionCounter}
      setActQuest={setQuestionCounter}
      answerList={answersCount}
      />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
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