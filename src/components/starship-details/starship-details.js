import React, { Component } from 'react';
import { StarshipDetailStyled } from './styles';


export default class StarshipDetail extends Component {
    render() {
        return(
            <StarshipDetailStyled>
                <img alt="StarshipImage" src="" />
                <div>
                    <p></p>
                    <dl>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </StarshipDetailStyled>
        );
    }
}