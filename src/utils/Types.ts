export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[]
  filteredPokemon: undefined | genericPokemonType[]
  filteredPokemonData: undefined | basicPokemonType[]
}

export interface HistoryInitialState {
  recentlySearched: undefined | basicPokemonType[]
}

export interface basicPokemonType {
  name: string
  id: number
  image: string
}

export interface genericPokemonType {
  name: string
  url: string
}

export interface generatedPokemonType {
  name: string
  id: number
  sprites: PokemonSpriteType
  weight: number
  height: number
}

export interface PokemonSpriteType {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}
