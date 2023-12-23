import { createSlice } from '@reduxjs/toolkit'
import { type PokemonTypeInitialState } from '../../utils/Types'
import { getInitialPokemonData } from '../reducers/getInitialPokemonData'

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined
}

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    })
  }
})

export default PokemonSlice.reducer
