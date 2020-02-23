import React, { Component, Fragment } from 'react';
import { Main } from './styles';
import { createGlobalStyle } from 'styled-components'
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import ItemDetail from '../item-detail/item-detail';
import SwapiService from '../../services/swapi-service';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    color: #5b6f76;
    background-color: #272727;
  }

  * {
    box-sizing: border-box;
  }
`


export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: null,
        directory: 'People',
        hasError: false
    }

    conponentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    itemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    onDirectoryChange = (directory) => {
        this.setState({directory});
    }

    render() {

        if (this.state.hasError) {
            return(
                <p>Woops, looks like somethink wrong</p>
            );
        }

        return(
            <Fragment>
                <GlobalStyle />
                <Main>
                    <Header directory={this.state.directory} onDirectoryChange={this.onDirectoryChange}/>
                    <RandomPlanet />
                    <ItemList getData={this.swapiService['getAll'+this.state.directory]} itemSelected={this.itemSelected} />
                    <ItemDetail itemId={this.state.selectedItem} directory={this.state.directory}/>
                </Main>
            </Fragment>
        );
    }
}