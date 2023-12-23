import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getInitialPokemonData } from '../../app/reducers/getInitialPokemonData'
import './Search.scss'
import logo from '../../assets/Pokédex_logo.png'

const Search = () => {
  const dispatch = useAppDispatch()
  const { allPokemon } = useAppSelector(
    ({ pokemon }) => pokemon
  )
  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  return (
        <div className='app-container'>
            <div className='app'>
                <div className='logo-container'>
                    <img src={logo} alt="Pokédex logo" className='app-logo' />
                </div>
            </div>
            <div className='search'>
                <input type="text" id="pokemon" placeholder="Search Pokemon" name="pokemon"/>
            </div>
        </div>
  )
}

export default Search
