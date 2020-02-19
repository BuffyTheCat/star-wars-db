import React, { Component, Fragment } from 'react';
import { Main } from './styles';
import { createGlobalStyle } from 'styled-components'
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetail from '../person details/person-details';
import StarshipDetail from '../starship-details/starship-details';
import PlanetDetail from '../planet-details/planet-details';

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

    state = {
        selectedPerson: 5,
        selectedPlanet: 5,
        selectedStarship: 5,
        directory: 'people'
    }

    onPersomSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    onDirectoryChange = (directory) => {
        this.setState({directory});
    }

    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Main>
                    <Header onDirectoryChange={this.onDirectoryChange}/>
                    <RandomPlanet />
                    <ItemList onItemSelected={this.onPersomSelected} />
                    <PersonDetail personId={this.state.selectedPerson}/>
                    <PlanetDetail planetId={this.state.selectedPlanet}/>
                    <StarshipDetail starshipId={this.state.selectedStarship}/>
                </Main>
            </Fragment>
        );
    }
}