import './App.css';
import Cards from "./cards/cards";
import {Component} from "react";
import './CSS-Playing-Cards/cards.css';

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
                        <tr>
                            <td>Royal Flush</td>
                            <td className="col-2">250</td>
                            <td className="col-3">500</td>
                            <td className="col-4">750</td>
                            <td className="col-5">1000</td>
                            <td className="col-6">5000</td>
                        </tr>
                        <tr>
                            <td>Straight Flush</td>
                            <td className="col-2">50</td>
                            <td className="col-3">100</td>
                            <td className="col-4">150</td>
                            <td className="col-5">200</td>
                            <td className="col-6">250</td>
                        </tr>
                        <tr>
                            <td>Four of a Kind</td>
                            <td className="col-2">25</td>
                            <td className="col-3">50</td>
                            <td className="col-4">75</td>
                            <td className="col-5">100</td>
                            <td className="col-6">125</td>
                        </tr>
                        <tr>
                            <td>Full House</td>
                            <td className="col-2">9</td>
                            <td className="col-3">18</td>
                            <td className="col-4">27</td>
                            <td className="col-5">36</td>
                            <td className="col-6">45</td>
                        </tr>
                        <tr>
                            <td>Flush</td>
                            <td className="col-2">6</td>
                            <td className="col-3">12</td>
                            <td className="col-4">18</td>
                            <td className="col-5">24</td>
                            <td className="col-6">30</td>
                        </tr>
                        <tr>
                            <td>Straight</td>
                            <td className="col-2">4</td>
                            <td className="col-3">8</td>
                            <td className="col-4">12</td>
                            <td className="col-5">16</td>
                            <td className="col-6">20</td>
                        </tr>
                        <tr>
                            <td>Three of a Kind</td>
                            <td className="col-2">3</td>
                            <td className="col-3">6</td>
                            <td className="col-4">9</td>
                            <td className="col-5">12</td>
                            <td className="col-6">15</td>
                        </tr>
                        <tr>
                            <td>Two Pairs</td>
                            <td className="col-2">2</td>
                            <td className="col-3">4</td>
                            <td className="col-4">6</td>
                            <td className="col-5">8</td>
                            <td className="col-6">10</td>
                        </tr>
                        <tr>
                            <td>Jacks or better</td>
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
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>

            <div className="btns">
                <button onClick={this.newNumbers} className='btn'>BET ONE</button>
                <button onClick={this.newNumbers} className='btn'>BET MAX</button>
                <button onClick={this.newNumbers} className='btn'>NEW CARDS</button>
                <button onClick={this.newNumbers} className='btn'>DEAL DRAW</button>
            </div>
        </div>
      // {/*<div className="btn-container">*/}
      // {/*  <button onClick={this.newNumbers} className='btn'>New numbers</button>*/}
      // {/*</div>*/}
      //
      // {/*<div className='numbers_container'>*/}
      //
      // {/*</div>*/}
  );
  }
}

export default App;