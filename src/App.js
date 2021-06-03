import React, { Component } from "react";
import Team from "./components/Team";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [
        {
          name: "Manchester",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XD1K7CisJLo9mgoDDKBSLAcvpyvuiRX3aFmSFCHXeoGrqc9NcwAwcA7mMRjj7CPdjy4&usqp=CAU",
          voteCount: 0,
          isWinner: false
        },
        {
          name: "Juventus",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d-gGxaFm2gKKH7QkIWI8e92R8TyZ0sKYMQ&usqp=CAU",
          voteCount: 0,
          isWinner: false
        },
        {
          name: "FC Barcelona",
          src:
            "https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg",
          voteCount: 0,
          isWinner: false
        }
      ]
    };
  }

  increment = (teamName) => {
    const teams = this.state.teams.map((item) => {
      console.log(item);
      if (item.name === teamName) {
        item.voteCount++;
      }
      return item;
    });
    this.setState({ teams }, () => {
      this.getWinner();
    });
  };

  getWinner = () => {
    const max = Math.max(...this.state.teams.map((item) => item.voteCount));
    const newTeams = this.state.teams.map((team) => {
      if (team.voteCount === max) {
        team.isWinner = true;
      } else {
        team.isWinner = false;
      }
      return team;
    });
    this.setState({ teams: newTeams });
  };

  render() {
    const content = this.state.teams.map((item) => {
      return (
        <Team
          teamName={item.name}
          teamImg={item.src}
          vote={item.voteCount}
          func={this.increment}
          className={item.isWinner ? "winner" : ""}
        />
      );
    });
    return <div className="container">{content}</div>;
  }
}

export default App;
