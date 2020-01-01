import React, {component, Component} from 'react';
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
 
//if number is less than 3 digits, prefix 00 then take the last 3 digits
let padToThree = (number) => (number <= 999? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
    return (
      <div className = "Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name}/>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;