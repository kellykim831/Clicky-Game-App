import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends.json file
    // this.state.clicked is a set that keeps track of what south park characters have been clicked
    // this.state.highScore keeps track of your score
  state = {
    friends: friends,
    score: 0,
    bestScore: 0,
    message: "Click any South Park character to start the game!",
    clicked: new Set()
  };

  setClick = id => {
    //select your friends with a specific id in this.state.friends
    const selectFriends = this.state.friends.find(friends => friends.id === id);
    if (this.state.clicked.has(selectFriends)) {
      this.setState(state => ({
        ...state,
        clicked: new Set(),
        message: "Sorry, try again!"
      }))
    } else {

      this.setState(state => ({
        ...state,
        friends: this.shuffleFriends(state.friends),
        clicked: state.clicked.add(selectFriends),
        bestScore: Math.max(state.clicked.size, state.bestScore),
        message: "Keep going, good job!"
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

  render() {
    return (
      <Wrapper>
        <Navbar title="Clicky Game" message={this.state.message} score={this.state.clicked.size} bestScore={this.state.bestScore}></Navbar>

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
        <Footer text="South Park Clicky Clicky Clicky Game"></Footer>      
      </Wrapper>
    );
  }
}

export default App;
