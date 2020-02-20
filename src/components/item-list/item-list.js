import React, { Component } from 'react';
import { ItemListStyled } from './styles';
import Loader from '../loader/loader';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;
        getData().then((itemList) => {
            this.setState({itemList})
        });
    }


    componentDidUpdate(prevProps) {
        const { getData } = this.props;

        if (this.props.getData !== prevProps.getData) {
            getData().then((itemList) => {
                this.setState({itemList})
            });
        }
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return(
                <li 
                    key={id}
                    onClick={() => this.props.itemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return(
                <ItemListStyled>
                    <Loader />
                </ItemListStyled>
            );
        } else {
            return(
                <ItemListStyled>
                    <ul>
                        {this.renderItems(itemList)}
                    </ul>
                </ItemListStyled>
            );
        }

    }
}