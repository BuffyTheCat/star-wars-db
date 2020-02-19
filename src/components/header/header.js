import React, { Component } from 'react';
import { HeaderStyled } from './styles';

export default class Header extends Component {
    render() {
        return(
            <HeaderStyled>
                <h1>Star-wars-db</h1>
                <nav>
                    <a href="#">planets</a>
                    <a href="#">starshiips</a>
                    <a href="#">people</a>
                </nav>
            </HeaderStyled>
        );
    }
}