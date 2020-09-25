import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//if number is less than 3 digits, prefix 00 then take the last 3 digits
let padToThree = (number: number) => (number <= 999 ? `00${number}`.slice(-3) : number);

interface PokecardProps {
  id: number;
  name: string;
  type: string;
  exp: number;
}

const Pokecard: React.FC<PokecardProps> = (props) => {
  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">EXP: {props.exp}</div>
    </div>
  );
};

export default Pokecard;
