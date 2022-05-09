import { useState } from "react";
import './App.css';
import Box from "./component/Box"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-solid-svg-icons';

// 1. 박스 2개 (타이틀, 사진 정보, 결과)
// 2. 가위 밥위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테투리 색이 바뀐다 (이기면 - 초록, 지면 - 빨강, 비기면 - 검정)


const choice = {
  rock:{
    name:"Rock",
    img:"https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
  },
  scissors:{
    name: "Scissors",
    img:"https://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
  },
  paper:{
    name: "Paper",
    img:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgement = (user,computer) => {
    console.log("user",user,"computer",computer);

    if(user.name == computer.name) {
      return "tie"
    } else if(user.name == "Rock") 
      return computer.name == "Scissors"? "win" : "lose";  
    else if(user.name == "Scissors") 
      return computer.name == "Paper"? "win" : "lose";
    else if(user.name == "Paper") 
      return computer.name == "Rock"? "win": "lose";
  }

  return (
    <div>
      <div className="titleName">
        <h1>가위 바위 보! </h1>
      </div>
      <div className="main">
        <button className="buttons" onClick={() => play("scissors")}><FontAwesomeIcon icon={faHandScissors} className="search" /></button>
        <button className="buttons" onClick={() => play("rock")}><FontAwesomeIcon icon={faHandBackFist} className="search" /></button>
        <button className="buttons" onClick={() => play("paper")}><FontAwesomeIcon icon={faHand} className="search" /></button>
      </div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
    </div>
  );
}


export default App;
