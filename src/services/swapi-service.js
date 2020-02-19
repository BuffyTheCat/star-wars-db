export default class SwapiService {
    _apiBase = 'https://swapi.co/api'

    async getSource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getSource(`/people/`);
        return res.results
    }

    async getPerson(id) {
        const res = await  this.getSource(`/people/${id}`);
        return res.results
    }

    async getAllPlanets() {
        const res = await  this.getSource(`/planets/`);
        return res.results
    }

    async getPlanet(id) {
        const res = await  this.getSource(`/planets/${id}`);
        return res.results
    }

    async getAllSparships() {
        const res = await  this.getSource(`/starships/`);
        return res.results
    }

    async getStarship(id) {
        const res = await  this.getSource(`/starships/${id}`);
        return res.results
    }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((body) => {
    console.log(body);
});