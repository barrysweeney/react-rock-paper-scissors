import React from "react";
import "./App.css";
import { Button } from "../Button/Button";
import { Status } from "../Status/Status";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Please make your move",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Rock Paper Scissors</p>
          <Button
            value="Rock"
            icon={<i className="fas fa-hand-rock fa-5x"></i>}
            onClick={(value) => this.handleClick(value)}
          />
          <Button
            value="Paper"
            icon={<i className="fas fa-hand-paper fa-5x"></i>}
            onClick={(value) => this.handleClick(value)}
          />
          <Button
            value="Scissors"
            icon={<i className="fas fa-hand-scissors fa-5x"></i>}
            onClick={(value) => this.handleClick(value)}
          />
          <Status text={this.state.result} />
        </header>
      </div>
    );
  }

  handleClick(value) {
    let playerSelection = value;
    let computerSelection = this.makeAutomatedSelection();
    let result = this.checkForWinner(playerSelection, computerSelection);
    this.setState({ result: result });
  }

  checkForWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return (
        <div>
          <p>You chose {playerSelection}</p>
          <p>Computer chose {computerSelection}</p>
          <p>It's a draw!</p>
        </div>
      );
    } else if (playerSelection === "Rock") {
      if (computerSelection === "Scissors") {
        return (
          <div>
            <p>You chose {playerSelection}</p>
            <p>Computer chose {computerSelection}</p>
            <p>You win!</p>
          </div>
        );
      } else {
        return (
          <div>
            <p>You chose {playerSelection}</p>
            <p>Computer chose {computerSelection}</p>
            <p>You lose.</p>
          </div>
        );
      }
    } else if (playerSelection === "Paper") {
      if (computerSelection === "Rock") {
        return (
          <div>
            <p>You chose {playerSelection}</p>
            <p>Computer chose {computerSelection}</p>
            <p>You win!</p>
          </div>
        );
      } else {
        return (
          <div>
            <p>You chose {playerSelection}</p>
            <p>Computer chose {computerSelection}</p>
            <p>You lose.</p>
          </div>
        );
      }
    } else if (playerSelection === "Scissors") {
      if (computerSelection === "Paper") {
        return (
          <div>
            <p>You chose {playerSelection}</p>
            <p>Computer chose {computerSelection}</p>
            <p>You win!</p>
          </div>
        );
      } else {
        return (
          <div>
            <p>You chose {playerSelection}</p>
            <p>Computer chose {computerSelection}</p>
            <p>You win!</p>
          </div>
        );
      }
    }
  }

  makeAutomatedSelection() {
    let computerSelection;
    let randomNumberBetween1and3 = this.generateRandomNumberBetween1and3();

    switch (randomNumberBetween1and3) {
      case 1:
        computerSelection = "Rock";
        break;
      case 2:
        computerSelection = "Paper";
        break;
      case 3:
        computerSelection = "Scissors";
        break;
      default:
        computerSelection = "Rock";
    }
    return computerSelection;
  }

  generateRandomNumberBetween1and3() {
    return Math.floor(Math.random() * 3) + 1;
  }
}

export default App;
