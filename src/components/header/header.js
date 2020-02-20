import React, { Component } from 'react';
import { HeaderStyled } from './styles';

export default class Header extends Component {
    render() {

        const {onDirectoryChange} = this.props;
        return(
            <HeaderStyled>
                <h1>Star-wars-db</h1>
                <nav>
                    <a onClick={() => onDirectoryChange('Planets')} href="#">planets</a>
                    <a onClick={() => onDirectoryChange('Starships')} href="#">starships</a>
                    <a onClick={() => onDirectoryChange('People')} href="#">people</a>
                </nav>
            </HeaderStyled>
        );
    }
}