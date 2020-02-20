import React, { Component } from 'react';
import ItemList from '../item-list/item-list'
import StarshipDetail from '../starship-details/starship-details'
import { StarshipPageStyled } from './styles';

export default class StarshipPage extends Component {
    state = {
        hasError: false
    }

    conponentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const { onItemSelected, starshipId } = this.props;

        if (this.state.hasError) {
            return(
                <StarshipPageStyled>
                    <p>Woops, looks like somethink wrong</p>
                </StarshipPageStyled>
            );
        }

        return(
            <StarshipPageStyled>
                <ItemList onItemSelected={onItemSelected} />
                <StarshipDetail starshipId={starshipId}/>
            </StarshipPageStyled>
        );
    }
}