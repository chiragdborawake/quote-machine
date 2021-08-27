import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';
import './index.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
        quotes: this.props.quotes,
        colors:this.props.colors,
        quoteIndex:0,
        colorIndex:0
      };
      this.getNewQuote = this.getNewQuote.bind(this);
  }
  getNewQuote(){
    this.setState((prevState) => ({
      quoteIndex: Math.floor(Math.random() * prevState.quotes.length),
      colorIndex: Math.floor(Math.random() * prevState.colors.length)
    }))
  }
  
  render() {
    document.body.style.backgroundColor = this.state.colors[this.state.colorIndex];
    return (
      <div className="quote-container">
        <div style={{color:this.state.colors[this.state.colorIndex]}}className="quote">
          " {this.state.quotes[this.state.quoteIndex].quote} "
        <div className="quote-auther">
            - {this.state.quotes[this.state.quoteIndex].auther}
          </div>

          <div className="buttons">
            <span><SocialIcon url="https://facebook.com/" /></span>
            <span><SocialIcon url="https://twitter.com/" /></span>
            <span>
              <button style ={{background:this.state.colors[this.state.colorIndex]}} onClick={this.getNewQuote}>New Quote</button>
            </span>
            
          </div>
        </div>
      </div>
    );
  }
}
let quotes = [
  {
    quote: 'I think it is possible for ordinary people to choose to be extraordinary',
    auther: 'Elon Musk'
  },
  {
    quote: 'When something is important enough, you do it even if the odds are not in your favor.',
    auther: 'Elon Musk'
  },
  {
    quote: 'Some people don\'t like change, but you need to embrace change if the alternative is disaster.',
    auther: 'Elon Musk'
  },
  {
    quote: 'It’s not the years in your life that count. It’s the life in your years.',
    auther: 'Elon Musk'
  },
  {
    quote: 'Failure is an option here. If things are not failing, you are not innovating enough.',
    auther: 'Elon Musk'
  },

  {
    quote: 'Creativity is just connecting things.',
    auther: 'Steve Jobs'
  },
  {
    quote: 'Your time is limited, so don’t waste it living someone else’s life.',
    auther: 'Steve Jobs'
  },
  {
    quote: 'Stay hungry. Stay foolish.',
    auther: 'Steve Jobs'
  },
  {
    quote: 'Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.',
    auther: 'Steve Jobs'
  },
  {
    quote: 'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
    auther: 'Steve Jobs'
  },

  {
    quote: 'A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.',
    auther: 'Naval Ravikant'
  },
  {
    quote: 'Desire is a contract that you make with yourself to be unhappy until you get what you want.',
    auther: 'Naval Ravikant'
  },
  {
    quote: 'You make your own luck if you stay at it long enough',
    auther: 'Naval Ravikant'
  },
  {
    quote: 'Wealth is assets that earn while you sleep.',
    auther: 'Naval Ravikant'
  },
  {
    quote: 'If it entertains you now but will bore you someday, it\'s a distraction. Keep looking.',
    auther: 'Naval Ravikant'
  },

  {
    quote: 'Wealth buys your freedom',
    auther: 'Naval Ravikant'
  },
  {
    quote: 'I like animals, all animals. I wouldn\'t hurt a cat or a dog - or a chicken or a cow. And I wouldn\'t ask someone else to hurt them for me. Thats why I\'m a Vegan.',
    auther: 'Peter Dinklage'
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    auther: 'Mahatma Gandhi'
  }

]
let colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'];

ReactDOM.render(
  <Quote quotes={quotes} colors ={colors} />,
  document.getElementById('root')
);

