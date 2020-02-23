import React, { Component } from 'react';
import { ItemDetailStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class PersonDetail extends Component {
    swapiService = new SwapiService();

    state = {
        item: {},
        loading: true,
        isEmpty: false,
        hasError: false
    };
    

    componentDidMount() {
        this.updateItem();
    }

    conponentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
        if (this.props.directory !== prevProps.directory) {
            this.setState({
                isEmpty: true
            });
        }
    }

    onItemLoaded = (item) => {        
        this.setState({
            item,
            loading: false
        })
    }

    updateItem = () => {
        const { itemId } = this.props;
        
        if (!itemId) {
            this.setState({
                isEmpty: true
            });
            return
        }

        this.setState({
            loading: true,
            isEmpty: false
        })
        
        this.swapiService
            ['get'+this.props.directory](itemId)
            .then(this.onItemLoaded);
            
    }

    renderItems(item) {        
        return Object.entries(item).map(([field,value]) => (
            <dl key={value}>
                <dt>{field}</dt>
                <dd>{value}</dd>
            </dl>
        ));
    }
    
    
    render() {
        const { item, loading } = this.state;

        if (this.state.hasError) {
            return(
                <ItemDetailStyled>
                    <p>Woops, looks like somethink wrong</p>
                </ItemDetailStyled>
            );
        } 

        if (this.state.isEmpty) {
            return(
                <ItemDetailStyled>
                    <p>Please select item</p>
                </ItemDetailStyled>
            );
        } 

        if (loading) {
            return (
                <ItemDetailStyled>
                    <Loader />
                </ItemDetailStyled>
            );
        } else {
            return(
                <ItemDetailStyled>
                    <img alt="itemImage" src={`https://starwars-visualguide.com/assets/img/${this.props.directory === 'People' ? 'characters' : this.props.directory.toLowerCase()}/${item.id}.jpg`} />
                    <div>
                        <p>{item.name}</p>
                        {this.renderItems(item)}
                    </div>
                </ItemDetailStyled>
            );
        }

    }
}