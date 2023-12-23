import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState, basicPokemonType, generatedPokemonType } from "../../utils/Types";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { getPokemonsData } from "../reducers/getPokemonsData";
import { getPokemonData } from "../reducers/getPokemonData";

const initialState: PokemonTypeInitialState = {
    allPokemon: undefined,
    filteredPokemon: undefined,
    filteredPokemonData: undefined,
    currentPokemon: undefined,
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        clearFilteredPokemon: (state) => {
            state.filteredPokemonData = undefined;
        },
    },
    extraReducers: (builder) => {
            builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
                    state.allPokemon = action.payload;
                });
            builder.addCase(getPokemonsData.fulfilled, (state, action) => {
                state.filteredPokemonData = action.payload as basicPokemonType[];
            });
            builder.addCase(getPokemonData.fulfilled, (state, action) => {
                state.currentPokemon = action.payload;
            });
    }
});

export const { clearFilteredPokemon } = PokemonSlice.actions;

export default PokemonSlice.reducer;