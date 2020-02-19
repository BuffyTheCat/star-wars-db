import React, { Component } from 'react';
import { PersonDetailStyled } from './styles';
import SwapiService from '../../services/swapi-service'
import Loader from '../loader/loader';


export default class PersonDetail extends Component {
    swapiService = new SwapiService();

    state = {
        person: {},
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        })
    }

    updatePerson = () => {
        const { personId } = this.props;

        if (!personId) {
            return
        }

        this.setState({
            loading: true
        })
        
        this.swapiService
            .getPerson(personId)
            .then(this.onPersonLoaded);
    }

    render() {
        const { person: {id, name, height, gender, mass}, loading } = this.state;

        if (loading) {
            return (
                <PersonDetailStyled>
                    <Loader />
                </PersonDetailStyled>
            );
        } else {
            return(
                <PersonDetailStyled>
                    <img alt="person image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
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