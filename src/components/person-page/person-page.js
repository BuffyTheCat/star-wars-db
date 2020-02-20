import React, { Component } from 'react';
import ItemList from '../item-list/item-list'
import PersonDetail from '../person-details/person-details'
import { PersonPageStyled } from './styles';
import SwapiService from '../../services/swapi-service';

export default class PersonPage extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    conponentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const { onItemSelected, personId } = this.props;

        if (this.state.hasError) {
            return(
                <PersonPageStyled>
                    <p>Woops, looks like somethink wrong</p>
                </PersonPageStyled>
            );
        }

        return(
            <PersonPageStyled>
                <ItemList getData={this.swapiService.getAllPeople} onItemSelected={onItemSelected} />
                <PersonDetail personId={personId}/>
            </PersonPageStyled>
        );
    }
}