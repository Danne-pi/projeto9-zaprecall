import styled from "styled-components";
import zap from "./assets/zap.svg"
import soso from "./assets/soso.svg"
import lose from "./assets/lose.svg"
import questionsContent from "./assets/questionContent";


function transformArray(){
    for (let i = 0; i < questionsContent.length; i++) {
      questionsContent[i].state = 0
      questionsContent[i].actQuest = false
    }
    return questionsContent
  }


export default function ResultPage(props){

    function LoadList(resp){
        let valueContainer = 0
        for (let i = 0; i < props.answerList.length; i++) {
            if(resp.value === props.answerList[i]){
                valueContainer += 1
            }
        }
        return valueContainer
    }

    function ShowMedia(){
        let media = 0
        function calcMedia(resp){
        let altresp = resp === 1?0:resp===2?0.5:1
        let valueContainer = 0
        for (let i = 0; i < props.answerList.length; i++) {
            if(resp === props.answerList[i]){
                valueContainer += 1
            }
        }
        media += valueContainer * altresp
    }
    calcMedia(1)
    calcMedia(2)
    calcMedia(3)
    return <h1>Media {media}/8</h1>
    }

    return <>
        <ThisPage>
            <p>
                <div>
                    <img src={lose}></img>
                    <h1><LoadList value={1} /></h1>
                </div>
                <div>
                    <img src={soso}></img>
                    <h1><LoadList value={2} /></h1>
                </div>
                <div>
                    <img src={zap}></img>
                    <h1><LoadList value={3} /></h1>
                </div>
            </p>
            <ShowMedia />
            <RestartButton
            onClick={()=>{
                props.setAnswer([0,0,0,0,0,0,0,0])
                props.thisState(transformArray)
                props.setIdx(0)
                props.setShowResult(false)
                props.setIdxToShow(0)
                document.getElementById('firstQuest').scrollIntoView({ behavior: 'smooth' })
            }}
            >Tentar Novamente</RestartButton>
        </ThisPage>
        <Shadowy />
    </>
}

const ThisPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 65vh;
    z-index: 100;
    border-radius: 20px;

    p{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px;

            h1{
                text-align: center;
            }
            
            img{
                height: 55px;
                width: 55px;
            }
        }
    }
`
const Shadowy = styled.div`
    background-color: rgba(25,25,25,0.5);
    width: 100vw;
    height: 100vh;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
`
const RestartButton = styled.button`
    margin-top: 30%;
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