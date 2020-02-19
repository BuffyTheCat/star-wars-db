import React, { Component, Fragment } from 'react';
import { Main } from './styles';
import { createGlobalStyle } from 'styled-components'
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    color: #5b6f76;
  }
`


export default class App extends Component {

    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Main>
                    <Header />
                    <RandomPlanet />
                    <ItemList />
                </Main>
            </Fragment>
        );
    }
}