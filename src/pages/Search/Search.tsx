import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getInitialPokemonData } from '../../app/reducers/getInitialPokemonData'
import { getPokemonsData } from '../../app/reducers/getPokemonsData'
import SearchResults from '../../components/SearchResults/SearchResults'
import { clearFilteredPokemon } from '../../app/slices/PokemonSlice'
import SearchHistory from '../../components/SearchHistory/SearchHistory'
import EmptyState from '../../components/EmptyState/EmptyState'
// @ts-expect-error path is not being recognized
import logo from '../../assets/images/logo.png'
import './Search.scss'

const Search = () => {
  const dispatch = useAppDispatch()
  const { allPokemon, filteredPokemonData } = useAppSelector(({ pokemon }) => pokemon)
  const { recentlySearched } = useAppSelector(({ history }) => history)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if ((!filteredPokemonData || !filteredPokemonData.length) && allPokemon?.length && !noResults) {
      const first15Entries = allPokemon.slice(0, 15)
      dispatch(getPokemonsData(first15Entries ?? []))
    }
  }, [dispatch, allPokemon, filteredPokemonData, noResults])

  const handleChange = (value: string) => getPokemon(value)
  const getPokemon = async (value: string) => {
    if (value.length) {
      const filteredResults = allPokemon?.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(value.toLowerCase()),
      )
      if (!filteredResults?.length) setNoResults(true)
      else {
        setNoResults(false)
        dispatch(getPokemonsData(filteredResults ?? []))
      }
    } else {
      setNoResults(false)
      dispatch(clearFilteredPokemon())
    }
  }

  return (
    <div className='app-container'>
      <div className='app'>
        <div className='logo-container'>
          <img src={logo} alt='Pokédex logo' className='app-logo' />
        </div>
      </div>
      <div className='search'>
        <input
          type='text'
          className='search-input'
          id='pokemon'
          placeholder='Search Pokemon'
          name='pokemon'
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {recentlySearched && recentlySearched.length && (
        <SearchHistory searches={recentlySearched ?? []} />
      )}
      {filteredPokemonData && filteredPokemonData.length && !noResults && (
        <SearchResults pokemons={filteredPokemonData ?? []} />
      )}
      {noResults && <EmptyState />}
    </div>
  )
}

export default Search
