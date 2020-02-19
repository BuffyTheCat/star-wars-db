import React, { Component } from 'react';
import { PlanetDetailStyled } from './styles';


export default class PlanetDetail extends Component {
    render() {
        return(
            <PlanetDetailStyled>
                <img alt="planetImage" src="" />
                <div>
                    <p></p>
                    <dl>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </PlanetDetailStyled>
        );
    }
}