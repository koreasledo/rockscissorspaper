import React, { Component } from 'react'
import "./App.css";
import BoxClass from './component/BoxClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-solid-svg-icons';

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

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState ({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 어레이로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  judgement = (user,computer) => {
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

  render() {
    return (
      <div>
        <div className="titleName">
          <h1>가위 바위 보! </h1>
        </div>
        <div className="main">
          <button className="buttons" onClick={() => this.play("scissors")}><FontAwesomeIcon icon={faHandScissors} className="search" /></button>
          <button className="buttons" onClick={() => this.play("rock")}><FontAwesomeIcon icon={faHandBackFist} className="search" /></button>
          <button className="buttons" onClick={() => this.play("paper")}><FontAwesomeIcon icon={faHand} className="search" /></button>
        </div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
      </div>
    )
  }
}
