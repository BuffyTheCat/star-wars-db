import React, { Component } from 'react';
import { PersonDetailStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class PersonDetail extends Component {
    swapiService = new SwapiService();

    state = {
        item: {},
        loading: true,
        directory: null
    };


    constructor(props) {
        super(props);
        this.state = {directory: props.directory}
    }
    

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
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
        console.log(this.state.directory);
        
        if (!itemId) {
            return
        }

        this.setState({
            loading: true
        })
        
        this.swapiService
            ['get'+this.state.directory](itemId)
            .then(this.onItemLoaded);
            
    }
    
    
    render() {
        const { item: {id, name, height, gender, mass}, loading, directory } = this.state;
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
                    <img alt="personImage" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                    <div>
                        <p>{name}</p>
                        <dl>
                            <dt>height</dt>
                            <dd>{height}</dd>
                        </dl>
                        <dl>
                            <dt>gender</dt>
                            <dd>{gender}</dd>
                        </dl>
                        <dl>
                            <dt>mass</dt>
                            <dd>{mass}</dd>
                        </dl>
                    </div>
                </PersonDetailStyled>
            );
        }

    }
}