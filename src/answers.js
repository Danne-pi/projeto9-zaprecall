import { useState } from "react";
import styled from "styled-components";
import ResultPage from "./resultPage";


export default function Answers(props) {
  const idx = props.actQuest
  const setAnswer = props.setAnswersCount
  const answerList = props.answerList
  const questlist = props.questList
  const thisState = props.thisState
  const setIdx = props.setActQuest
  const [idxToShow, setIdxToShow] = useState(0)
  const [showResult, setShowResult] = useState(false)

  function answerHandler(answerType){
    let newArr = [...answerList]
    for (let i = 0; i < newArr.length; i++) {
      if(i === idx){
        newArr[i] = answerType
      }            
    }
    setAnswer(newArr)
    addNewState(idx, questlist, thisState, (answerType+2))
    if(idx < (questlist.length-1)){
      const newIdx = idx + 1
      setIdx(newIdx)
      setIdxToShow(newIdx)
    }
    else{
      const newIdx = idxToShow + 1
      setIdxToShow(newIdx)
    }
  }

  function addNewState(index, actuaArr, thisState, newState){
    let newArr = [...actuaArr]
    
    for (let i = 0; i < newArr.length; i++) {
      if(i === index){
        newArr[i].state = newState
      }
      else {
      }
    }
    thisState(newArr)
  }

  
    return (
      <ThisAnswers>
        <Buttons
        showThis={idxToShow < questlist.length}
        >
            <button data-identifier="forgot-btn" onClick={()=> answerHandler(1)} className={questlist[idx].state === 2 ? 'b1': 'b0'}>Nao lembrei</button>
            <button data-identifier="almost-forgot-btn" onClick={()=> answerHandler(2)} className={questlist[idx].state === 2 ? 'b2': 'b0'}>Quase nao lembrei</button>
            <button data-identifier="zap-btn" onClick={()=> answerHandler(3)} className={questlist[idx].state === 2 ? 'b3': 'b0'}>Zap!</button>
        </Buttons>
        <h2 data-identifier="flashcard-counter">{idxToShow}/{questlist.length} CONCLUIDOS</h2>
        <LastButton
        showThis={idxToShow === questlist.length}
        onClick={()=> setShowResult(true)}
        >
        Conferir resultado</LastButton>
        {showResult ? 
        <ResultPage 
        setAnswer = {setAnswer}
        answerList = {answerList}
        thisState = {thisState}
        setIdx = {setIdx}
        setIdxToShow = {setIdxToShow}
        setShowResult = {setShowResult}
        /> 
        : <></>}
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
    display: ${props => props.showThis ? 'flex' : 'none'};
    width: 60%;
    margin-inline: auto;
    justify-content: space-evenly;

    button{
        color: white;
        border: none;
        border-radius: 9px;
        width: 100px;
        height: 50px;
        cursor: pointer;
        transition: all 0.3s;
    }
    .b1{background-color: #FF3030;}
    .b2{background-color: #FF922E;}
    .b3{background-color: #2FBE34;}
    .b0{
      pointer-events: none;
      background-color: #BCBCBD;
      }
  `
  const LastButton = styled.button`
    display: ${props=> props.showThis ? 'unset' : 'none'};
    background-color: #33B950;
    color: white;
    font-weight: 700;
    font-size: 16px;
    border: none;
    border-radius: 9px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s;
  ` 