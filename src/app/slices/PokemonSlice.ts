import { createSlice } from '@reduxjs/toolkit'
import { type PokemonTypeInitialState, type basicPokemonType } from '../../utils/Types'
import { getInitialPokemonData } from '../reducers/getInitialPokemonData'
import { getPokemonsData } from '../reducers/getPokemonsData'

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  filteredPokemon: undefined,
  filteredPokemonData: undefined
}

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearFilteredPokemon: (state) => {
      state.filteredPokemonData = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    })
    builder.addCase(getPokemonsData.fulfilled, (state, action) => {
      state.filteredPokemonData = action.payload!
    })
  }
})

export const { clearFilteredPokemon } = PokemonSlice.actions

export default PokemonSlice.reducer
