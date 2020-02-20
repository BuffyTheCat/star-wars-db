import React, { Component } from 'react';
import ItemList from '../item-list/item-list'
import PlanetDetail from '../planet-details/planet-details'
import { PlanetPageStyled } from './styles';

export default class PlanetPage extends Component {
    state = {
        hasError: false
    }

    conponentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const { onItemSelected, planetId } = this.props;

        if (this.state.hasError) {
            return(
                <PlanetPageStyled>
                    <p>Woops, looks like somethink wrong</p>
                </PlanetPageStyled>
            );
        }

        return(
            <PlanetPageStyled>
                <ItemList onItemSelected={onItemSelected} />
                <PlanetDetail planetId={planetId}/>
            </PlanetPageStyled>
        );
    }
}