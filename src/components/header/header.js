import React, { Component } from 'react';
import { HeaderStyled, LinkStyled } from './styles';

export default class Header extends Component {
    links = [
        { name: 'Planets', label: 'Planets'},
        { name: 'Starships', label: 'Starships'},
        { name: 'People', label: 'People'}
    ]

    render() {

        const {onDirectoryChange, directory} = this.props;

        const links = this.links.map((item) => {
            console.log(directory === item.name);
            return (
                <LinkStyled key={item.name} active={directory === item.name ? true : false} onClick={() => onDirectoryChange(`${item.name}`)} href="#">{item.label}</LinkStyled>
            );
        });

        return(
            <HeaderStyled>
                <h1>Star-wars-db</h1>
                <nav>
                    {links}
                </nav>
            </HeaderStyled>
        );
    }
}