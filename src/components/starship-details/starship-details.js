import React, { Component } from 'react';
import { StarshipDetailStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class StarshipDetail extends Component {
    swapiService = new SwapiService();

    state = {
        starship: {},
        loading: true
    };

    componentDidMount() {
        this.updateStarship();
    }

    componentDidUpdate(prevProps) {
        if (this.props.starshipId !== prevProps.starshipId) {
            this.updateStarship();
        }
    }

    onStarshipLoaded = (starship) => {
        this.setState({
            starship,
            loading: false
        })
    }

    updateStarship = () => {
        const { starshipId } = this.props;
        console.log(starshipId);
        

        if (!starshipId) {
            return
        }

        this.setState({
            loading: true
        })
        
        this.swapiService
            .getStarship(starshipId)
            .then(this.onStarshipLoaded);
    }

    render() {
        const { starship: {id, name, model, starshipClass, manufacturer, }, loading } = this.state;

        if (loading) {
            return (
                <StarshipDetailStyled>
                    <Loader />
                </StarshipDetailStyled>
            );
        } else {
            return(
                <StarshipDetailStyled>
                    <img alt="starshipImage" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
                    <div>
                        <p>{name}</p>
                        <dl>
                            <dt>model</dt>
                            <dd>{model}</dd>
                        </dl>
                        <dl>
                            <dt>starshipClass</dt>
                            <dd>{starshipClass}</dd>
                        </dl>
                        <dl>
                            <dt>manufacturer</dt>
                            <dd>{manufacturer}</dd>
                        </dl>
                    </div>
                </StarshipDetailStyled>
            );
        }

    }
}