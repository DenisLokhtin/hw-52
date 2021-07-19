import './App.css';
import Cards from "./cards/cards";
import {Component} from "react";
import './CSS-Playing-Cards/cards.css';

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'T'];
const suits = ['D', 'H', 'C', 'S'];
const deck = [];

class CardDeck {
    constructor() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                deck.push({suit: suits[i], value: values[j]})
            }
        }
    }

    getCard() {
        const randomNumber = Math.floor(Math.random() * (deck.length + 1));
        const removed = deck.splice(randomNumber, 1);
    }

    getCards(howMany) {
        for (let i = 0; i < howMany; i++) {
            this.getCards();
        }
    }
}

const cards = new CardDeck();
cards.getCard();

class App extends Component {

  // state = {
  //   numbers: []
  // }
  //
  //
  // newNumbers = () => {
  //   this.state.numbers.length = 0;
  //   for (let i = 0; i < 5; i++) {
  //     const randomNumber = Math.floor(Math.random() * (36 - 5)) + 5;
  //     this.state.numbers.push(randomNumber);
  //   }
  //   this.state.numbers.sort((a, b) => a > b ? 1 : -1)
  //   const numbers = this.state.numbers;
  //   this.setState({numbers});
  //   console.log(this.state.numbers)
  // }

  render() {
    return (
        <div className="container">
            <div className="info">
                <div>
                    <table className="table">
                        <tr className="ln-1">
                            <td className="col-1">Royal Flush</td>
                            <td className="col-2">250</td>
                            <td className="col-3">500</td>
                            <td className="col-4">750</td>
                            <td className="col-5">1000</td>
                            <td className="col-6">5000</td>
                        </tr>
                        <tr className="ln-2">
                            <td className="col-1">Straight Flush</td>
                            <td className="col-2">50</td>
                            <td className="col-3">100</td>
                            <td className="col-4">150</td>
                            <td className="col-5">200</td>
                            <td className="col-6">250</td>
                        </tr>
                        <tr className="ln-3">
                            <td className="col-1">Four of a Kind</td>
                            <td className="col-2">25</td>
                            <td className="col-3">50</td>
                            <td className="col-4">75</td>
                            <td className="col-5">100</td>
                            <td className="col-6">125</td>
                        </tr>
                        <tr className="ln-4">
                            <td className="col-1">Full House</td>
                            <td className="col-2">9</td>
                            <td className="col-3">18</td>
                            <td className="col-4">27</td>
                            <td className="col-5">36</td>
                            <td className="col-6">45</td>
                        </tr>
                        <tr className="ln-5">
                            <td className="col-1">Flush</td>
                            <td className="col-2">6</td>
                            <td className="col-3">12</td>
                            <td className="col-4">18</td>
                            <td className="col-5">24</td>
                            <td className="col-6">30</td>
                        </tr>
                        <tr className="ln-6">
                            <td className="col-1">Straight</td>
                            <td className="col-2">4</td>
                            <td className="col-3">8</td>
                            <td className="col-4">12</td>
                            <td className="col-5">16</td>
                            <td className="col-6">20</td>
                        </tr>
                        <tr className="ln-7">
                            <td className="col-1">Three of a Kind</td>
                            <td className="col-2">3</td>
                            <td className="col-3">6</td>
                            <td className="col-4">9</td>
                            <td className="col-5">12</td>
                            <td className="col-6">15</td>
                        </tr>
                        <tr className="ln-8">
                            <td className="col-1">Two Pairs</td>
                            <td className="col-2">2</td>
                            <td className="col-3">4</td>
                            <td className="col-4">6</td>
                            <td className="col-5">8</td>
                            <td className="col-6">10</td>
                        </tr>
                        <tr className="ln-9">
                            <td className="col-1">Jacks or better</td>
                            <td className="col-2">1</td>
                            <td className="col-3">2</td>
                            <td className="col-4">3</td>
                            <td className="col-5">4</td>
                            <td className="col-6">5</td>
                        </tr>
                    </table>
                </div>
                <div className="bets">
                    <div>Bet: 5</div>
                    <div>Win: 5</div>
                    <div>Credits: 100</div>
                </div>
            </div>

            <div className="cards">
                <Cards rank="7" suits="D"/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>

            <div className="btns">
                <button onClick={this.bet} className='btn'>BET ONE</button>
                <button onClick={this.betFive} className='btn'>BET MAX</button>
                <button onClick={this.deal} className='btn'>DEAL DRAW</button>
            </div>
        </div>
  );
  };
};

export default App;