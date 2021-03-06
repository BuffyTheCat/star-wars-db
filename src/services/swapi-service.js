export default class SwapiService {
    _apiBase = 'https://swapi.co/api'

    async getSource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }

        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getSource(`/people/`);
        return res.results.map(this._transformPerson)
    }

    async getPeople(id) {
        const person = await this.getSource(`/people/${id}`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getSource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanets = async (id) => {
        const planet = await this.getSource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getSource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarships = async (id) => {
        const starship = await this.getSource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            surfaceWater: planet.surface_water
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            starshipClass: starship.starship_class,
            manufacturer: starship.manufacturer
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            height: person.height,
            gender: person.gender,
            mass: person.mass
        }
    }
}