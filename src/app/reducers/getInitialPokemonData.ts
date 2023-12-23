import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getInitialPokemonData = createAsyncThunk(
  'pokemon/getInitialPokemonData',
  async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1500')
      return data.results
    } catch (e) { console.error(e) }
  })
