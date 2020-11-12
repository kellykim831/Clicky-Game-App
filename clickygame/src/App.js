import React, { Component } from 'react';
import Cards from './southpark.json';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';

//set state to 0

class App extends Component {
    state = {
      Cards,
      clickedCard: [],
      score: 0,
      highScore: 0,
      isGuessed: false
    };
  
    randomGenerator = (a, b) => (Math.random() > 0.5 ? -1 : 1);
//onclcick for images
imageClick = id => {
    const currentCard = id;
    const CardAlreadyClicked =
      this.state.clickedCard.indexOf(currentCard) > -1;

    if (CardAlreadyClicked) {
      this.setState({
        Cards: this.state.cards.sort(this.randomGenerator),
        clickedCard: [],
        score: 0,
        highScore: 0,
        isGuessed: false
      });
      alert('You lose. Play again?');
    } else {
      let score = this.state.score;
      let cards = this.state.cards;

      this.setState(
        {
          cards: this.state.cards.sort(this.randomGenerator),
          clickedCard: this.state.clickedcard.concat(currentCard),
          score: score + 1,
          highScore: Math.max(this.state.highScore, score),
          isGuessed: true
        },
        () => {
          if (this.state.score === cards.length) {
            alert('Yay! You Win!');
            this.setState({
              cards: this.state.cards.sort(this.randomGenerator),
              clickedCard: [],
              score: 0,
              highScore: 0
            });
          }
        }
      );
    }
  };

  render() {
    const { cards, score, highScore, isGuessed } = this.state;

    return (
      <div className='application'>
        <Header score={score} highScore={highScore} isGuessed={isGuessed} />
        <div className='wrapper'>
          <CharacterList cards={cards} imageClick={this.imageClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
