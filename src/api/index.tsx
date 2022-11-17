import axios from "axios";

const BASE = 'https://pokeapi.co/api/v2';

export const api = {
    getAllPokemons: async () => {
        const response = await axios.get(`${BASE}/pokemon?limit=50`);
        const data = await response.data;
        return data;
    },
    getAllPokemonsInfo: async (url: string[]) => {
        const response = axios.all(url.map(async (url) => await axios.get(url)));
        return response;
    },
    getPokemon: async (id: number) =>  {
        const response = await axios.get(`${BASE}/pokemon/${id}`);
        return response.data;
    }
};