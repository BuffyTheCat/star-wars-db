import React, { Component } from 'react';
import { PersonDetailStyled } from './styles';


export default class PersonDetail extends Component {
    render() {
        return(
            <PersonDetailStyled>
                <img alt="PersonImage" src="" />
                <div>
                    <p></p>
                    <dl>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </PersonDetailStyled>
        );
    }
}