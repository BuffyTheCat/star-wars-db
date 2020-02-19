import React, { Component } from 'react';
import { ItemListStyled } from './styles';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople().then((peopleList) => {
            this.setState({peopleList})
        });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return(
                <li 
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    }

    render() {

        const {peopleList} = this.state;

        if (!peopleList) {
            return(
                <ItemListStyled>
                    <Loader />
                </ItemListStyled>
            );
        } else {
            return(
                <ItemListStyled>
                    <ul>
                        {this.renderItems(peopleList)}
                    </ul>
                </ItemListStyled>
            );
        }

    }
}