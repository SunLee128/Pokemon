import React from 'react';
import { shallow } from 'enzyme'; //for shalow testing
import { mount } from 'enzyme'; //for fullDOM testing
import { render } from '@testing-library/react';
import App from 'components/App';
import Pokedex from 'components/Pokedex';
import Pokecard from 'components/Pokecard';
import Pokegame from 'components/Pokegame';

let wrapped;

beforeEach(() => {
  wrapped = mount(<App />);
});

afterEach(() => {
  wrapped.unmount();
}); // cleans up the DOM created during the test

it('shows 1 Pokegame', () => {
  expect(wrapped.find(Pokegame).length).toEqual(1);
});

it('shows 2 Pokedex', () => {
  expect(wrapped.find(Pokedex).length).toEqual(2);
});

it('shows 8 Pokecards', () => {
  expect(wrapped.find(Pokecard).length).toEqual(8);
});
