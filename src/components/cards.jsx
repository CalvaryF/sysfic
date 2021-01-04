import React, { Component } from "react";
import Card from "./card";
class Cards extends Component {
  state = {
    cards: this.props.cards,
  };
  render() {
    return (
      <div className="flex">
        <div className="cards">
          {this.state.cards.map((card) => (
            <Card
              key={card.id}
              type={card.type}
              title={card.title}
              thumbnail={card.thumbnail}
              path={card.path}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
