import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type basicPokemonType, type genericPokemonType } from '../../utils/Types'

export const getPokemonsData = createAsyncThunk(
  'pokemon/filteredPokemonData',
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: basicPokemonType[] = []
      for await (const pokemon of pokemons) {
        const pokemonData = await axios.get(pokemon.url)
        const { name, id, sprites } = pokemonData.data
        console.log(pokemonData)
        // lets cap it at 15 for the cards view
        if (pokemonsData.length === 15) break
        pokemonsData.push({
          name,
          id,
          image: sprites.front_default
        })
      }
      return pokemonsData
    } catch (err) {
      console.error(err)
    }
  }
)
