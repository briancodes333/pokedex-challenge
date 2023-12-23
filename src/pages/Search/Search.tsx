import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getInitialPokemonData } from '../../app/reducers/getInitialPokemonData'
import { getPokemonsData } from '../../app/reducers/getPokemonsData'
import './Search.scss'
import logo from '../../assets/Pokédex_logo.png'
import { clearFilteredPokemon } from '../../app/slices/PokemonSlice'
import SearchResults from '../../components/SearchResults/SearchResults'

const Search = () => {
  const dispatch = useAppDispatch()
  const { allPokemon, filteredPokemonData } = useAppSelector(
    ({ pokemon }) => pokemon
  )

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  const [noResults, setNoResults] = useState(false)
  const handleChange = async (value: string) => { await getPokemon(value) }
  const getPokemon = async (value: string) => {
    if (value.length) {
      const filteredResults = allPokemon?.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(value.toLowerCase())
      )
      if (!filteredResults?.length) setNoResults(true)
      else {
        setNoResults(false)
        dispatch(getPokemonsData(filteredResults ?? []))
      }
    } else {
      // TODO: why isnt this clearing the filteredPokemonData properly?
      setNoResults(false)
      dispatch(clearFilteredPokemon())
    }
  }

  return (
        <div className='app-container'>
            <div className='app'>
                <div className='logo-container'>
                    <img src={logo} alt="Pokédex logo" className='app-logo' />
                </div>
            </div>
            <div className='search'>
                <input type="text" id="pokemon" placeholder="Search Pokemon" name="pokemon" onChange={async (e) => { await handleChange(e.target.value) }}/>
            </div>
            {filteredPokemonData?.length && !noResults && (
                <SearchResults pokemons={filteredPokemonData ?? []} />
            )}
        </div>
  )
}

export default Search
