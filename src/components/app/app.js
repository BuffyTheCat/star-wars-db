import React, { Component, Fragment } from 'react';
import { Main } from './styles';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #191818;
    box-sizing: border-box;
  }
`


export default class App extends Component {

    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Main>
                    asd
                </Main>
            </Fragment>
        );
    }
}