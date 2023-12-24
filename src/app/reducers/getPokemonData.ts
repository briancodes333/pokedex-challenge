import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPokemonData = createAsyncThunk('pokemon/currentPokemon', async (id: string) => {
    try {
        const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return pokemonData.data;
    } catch (e) {
        console.log(e);
    }
});
