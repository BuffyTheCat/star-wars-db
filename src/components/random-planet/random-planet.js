import React, { Component } from 'react';
import { RandomPlanetStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(() => {
            this.updatePlanet();
        }, 3000);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*18) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet: {id, name, population, rotationPeriod, diameter, climate, surfaceWater}, loading, error } = this.state;

        if (loading && !error) {
            return (
                <RandomPlanetStyled>
                    <Loader />
                </RandomPlanetStyled>
            );
        } else if (error) {
            return (
                <RandomPlanetStyled>
                    <p>Woops, looks like somethink wrong</p>
                </RandomPlanetStyled>
            );
        } else {
            return(
                <RandomPlanetStyled>
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
                </RandomPlanetStyled>
            );
        }
    }
}