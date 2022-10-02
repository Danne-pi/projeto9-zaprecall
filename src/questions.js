import styled from "styled-components";
import play from "./assets/play.svg"

function WriteListOfQuestions(props){
    const qlist = props.questList
    return qlist.map((item, idx)=>(
    <Question 
    onClick={()=>createNewArray(idx, qlist, props.thisState)}
    key={idx} 
    open={qlist[idx].opened ? '150px' : '90px'}>
        <h3>
          {!qlist[idx].opened ?
          'Pergunta ' + (idx+1)
          :
          qlist[idx].question
          }
        </h3>
        <img src={play} alt=""></img>
    </Question>
    ))
}
function createNewArray(index, actuaArr, thisState){
  let newArr = [...actuaArr]
  for (let i = 0; i < newArr.length; i++) {
    if(i === index){
      newArr[i].opened = !newArr[i].opened
    }
  }
  thisState(newArr)
}


export default function Questions(props) {
    return (
      <ThisQuestions>
        <WriteListOfQuestions questList={props.questList} thisState={props.thisState}/>
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
    height: ${props => props.open};
    display: flex;
    justify-content: start;
    align-items: center;
    padding-inline: 24px;
    border-radius: 18px;
    margin-bottom: 12px;
    transition: all 0.8s;

    h3{
      color: #333333;
      font-family: 'Recursive';
      transition: all 0.8s;
    }
    img{
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
    }
  `