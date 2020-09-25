import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
interface PokedexProps {
  isWinner: boolean;
  exp: number;
  pokemon: {
    id: number;
    name: string;
    type: string;
    base_experience: number;
  }[];
}
const Pokedex: React.FC<PokedexProps> = (props) => {
  let title;
  if (props.isWinner) {
    title = <h1 className="Pokedex-winner">Winning Hand</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>;
  }

  return (
    <div className="Pokedex">
      <h1>Pokedex!</h1>
      <p>Total Experience: {props.exp}</p>
      {title}
      <p>{props.isWinner ? 'WINNER' : 'LOSER'}</p>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />)}
      </div>
    </div>
  );
};

export default Pokedex;
