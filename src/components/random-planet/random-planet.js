import React, { Component } from 'react';
import { RandomPlanetStyled } from './styles';


export default class RandomPlanet extends Component {
    render() {
        return(
            <RandomPlanetStyled>
                <img alt="planetImage" src="" />
                <div>
                    <p></p>
                    <dl>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </RandomPlanetStyled>
        );
    }
}