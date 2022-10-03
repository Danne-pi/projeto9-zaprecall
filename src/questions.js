import styled from "styled-components";
import play from "./assets/play.svg"
import reveal from "./assets/reveal.svg"
import zap from "./assets/zap.svg"
import soso from "./assets/soso.svg"
import lose from "./assets/lose.svg"


function WriteListOfQuestions(props){
    const qlist = props.questList
    return qlist.map((item, idx)=>(
    <Question 
    data-identifier="flashcard"
    key={idx}
    id={idx === 0? 'firstQuest': ''} 
    height={qlist[idx].state}
    imgPosition={qlist[idx].state}
    iconClickable={idx === props.actQuest}
    questionColor={props.answerList[idx]}
    >
        <h3 data-identifier="flashcard-index-item">
          {qlist[idx].state === 0 ?
          'Pergunta '+(idx+1)
          :qlist[idx].state === 1 ?
            <p data-identifier="flashcard-question">{qlist[idx].question}</p>
            :qlist[idx].state === 2 ?
              <p data-identifier="flashcard-answer">{qlist[idx].answer}</p>
              :<s>{'Pergunta '+(idx+1)}</s>
          }
        </h3>
        <img 
        data-identifier="flashcard-show-btn flashcard-turn-btn flashcard-status"
        src={
          qlist[idx].state === 0 ? 
            play 
          :qlist[idx].state === 1 ?
            reveal
          :qlist[idx].state === 3 ?
            lose
          :qlist[idx].state === 4 ?
            soso
          : zap
        } 
        alt=""
        onClick={()=> addNewState(props.actQuest, qlist, props.thisState, qlist[idx].state===0?1:2)}
        ></img>
    </Question>
    ))
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

export default function Questions(props) {
    return (
      <ThisQuestions>
        <WriteListOfQuestions
        questList={props.questList} 
        thisState={props.thisState}
        actQuest={props.actQuest}
        setActQuest={props.setActQuest}
        answerList={props.answerList}
        />
      </ThisQuestions>
    );
  }

  const ThisQuestions = styled.div`
    margin-top: 30px;
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
    position: relative;
    background-color: white;
    width: 100%;
    margin-inline: auto;
    height: ${
      props => {
        if(props.height === 1 || props.height === 2){
          return '150px'
        }
        else{
          return '90px'
        }
      }
      };
    display: flex;
    justify-content: start;
    align-items: center;
    padding-inline: 24px;
    border-radius: 18px;
    margin-bottom: 12px;
    transition: all 0.8s;

    h3{
      color: ${props =>
      {
        if(props.questionColor === 0){
          return '#333333'
        }
        if(props.questionColor === 1){
          return '#FF3030'
        }  
        if(props.questionColor === 2){
          return '#FF922E'
        }  
        if(props.questionColor === 3){
          return '#2FBE34'
        }  
      }
      };
      font-family: 'Recursive';
      transition: all 0.8s;
    }
    img{
      display: ${props => props.imgPosition === 2 ? 'none' : 'unset'};
      cursor: pointer;
      pointer-events: ${props => props.iconClickable ? 'all' : 'none'};
      opacity: ${props => props.iconClickable || props.imgPosition > 2 ? 1 : 0.5};
      position: absolute;
      bottom: ${
      props => {
        if(props.height === 1){
          return '20%'
        }
        else{
          return '50%'
        }
      }
      };
      right: 24px;
      transform: translateY(50%);
      transition: all 0.8s ease-in-out;
    }
  `