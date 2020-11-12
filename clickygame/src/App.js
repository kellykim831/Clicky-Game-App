import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";



class App extends Component {
  state = {
    friends: friends,
    score: 0,
    bestScore: 0,
    message: "Click a character to test your memory!",
    clicked: new Set()
  };

  setClick = id => {
    const selectFriends = this.state.friends.find(friends => friends.id === id);
    if (this.state.clicked.has(selectFriends)) {
      // End game and set this.state to include a new set that is empty to start a new game
      // Set message to display you guessed incorrect
      this.setState(state => ({
        ...state,
        clicked: new Set(),
        message: "Sorry, you guessed incorrect!"
      }))
    } else {
      // If this.state.clicked doesn't include the slected friend image, add the friend image to the clicked set 
      // Update high score to reflect either the number of correct friends selected or the existing high score, whichever is larger
      // Set mesage to display you guessed correct
      this.setState(state => ({
        ...state,
        friends: this.shuffleFriends(state.friends),
        clicked: state.clicked.add(selectFriends),
        bestScore: Math.max(state.clicked.size, state.bestScore),
        message: "You're still in the game!"
      }))
    }
  };
  
  shuffleFriends = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
    }
    return friends
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar title="Memory Clicky Game" message={this.state.message} score={this.state.clicked.size} bestScore={this.state.bestScore}></Navbar>

        <Jumbotron>Jumbotron</Jumbotron>

        <div className="container">
          <div className="row">
            {this.state.friends.map(friends => (
              <FriendCard
                onClick={() => this.setClick(friends.id)}
                id={friends.id}
                key={friends.id}
                name={friends.name}
                image={friends.image}
              />

            ))}
          </div>
        </div>

      </Wrapper>
    );
  }
}

export default App;
