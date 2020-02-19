import React, { Component } from 'react';
import { PlanetDetailStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class PlanetDetail extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        if (this.props.planetId !== prevProps.planetId) {
            this.updatePlanet();
        }
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet = () => {
        const { planetId } = this.props;

        if (!planetId) {
            return
        }

        this.setState({
            loading: true
        })
        
        this.swapiService
            .getPlanet(planetId)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet: {id, name, population, rotationPeriod, diameter, climate, surfaceWater}, loading } = this.state;

        if (loading) {
            return (
                <PlanetDetailStyled>
                    <Loader />
                </PlanetDetailStyled>
            );
        } else {
            return(
                <PlanetDetailStyled>
                    <img alt="planetImage" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                    <div>
                        <p>{name}</p>
                        <dl>
                            <dt>population</dt>
                            <dd>{population}</dd>
                        </dl>
                        <dl>
                            <dt>rotationPeriod</dt>
                            <dd>{rotationPeriod}</dd>
                        </dl>
                        <dl>
                            <dt>diameter</dt>
                            <dd>{diameter}</dd>
                        </dl>
                        <dl>
                            <dt>climate</dt>
                            <dd>{climate}</dd>
                        </dl>
                        <dl>
                            <dt>surfaceWater</dt>
                            <dd>{surfaceWater}</dd>
                        </dl>
                    </div>
                </PlanetDetailStyled>
            );
        }

    }
}