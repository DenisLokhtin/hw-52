import React from 'react';

const suit = {
    'D': 'diams',
    'H': 'hearts',
    'C': 'clubs',
    'S': 'spades',
}

const suitFigure = {
    'D': '♦',
    'H': '♥',
    'C': '♣',
    'S': '♠',
}

const Cards = props => {

    return (
        <div className="playingCards container">
            <div className={'card rank-' + props.rank + ' ' + suit[props.suits] }>
                <span className="rank">{props.rank}</span>
                <span className="suit">{suitFigure[props.suitFigure]}</span>
            </div>
        </div>
    )
}



export default Cards;