import React, { Component } from 'react';
import { PersonDetailStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class PersonDetail extends Component {
    swapiService = new SwapiService();

    state = {
        item: {},
        loading: true
    };
    

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
        if (this.props.directory !== prevProps.directory) {
            this.updatePerson();
        }
    }

    onItemLoaded = (item) => {        
        this.setState({
            item,
            loading: false
        })
    }

    updatePerson = () => {
        const { itemId } = this.props;
        
        
        if (!itemId) {
            return
        }

        this.setState({
            loading: true
        })
        
        this.swapiService
            ['get'+this.props.directory](itemId)
            .then(this.onItemLoaded);
            
    }

    renderItems(item) {
        console.log(item);
        
        return Object.entries(item).map(([field,value]) => (
            <dl>
                <dt>{field}</dt>
                <dd>{value}</dd>
            </dl>
        ));
    }
    
    
    render() {
        const { item, loading } = this.state;
        // 

        if (loading) {
            return (
                <PersonDetailStyled>
                    <Loader />
                </PersonDetailStyled>
            );
        } else {
            return(
                <PersonDetailStyled>
                    <img alt="personImage" src={`https://starwars-visualguide.com/assets/img/${this.props.directory === 'People' ? 'characters' : this.props.directory.toLowerCase()}/${item.id}.jpg`} />
                    <div>
                        <p>{item.name}</p>
                        {this.renderItems(item)}
                    </div>
                </PersonDetailStyled>
            );
        }

    }
}