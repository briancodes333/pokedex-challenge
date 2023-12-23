import { useNavigate } from 'react-router-dom'
import { type basicPokemonType, genericPokemonType } from '../../utils/Types'
import './SearchResults.scss'

const SearchResults = ({ pokemons }: { pokemons: basicPokemonType[] }) => {
  const navigate = useNavigate()

  return (
    <div>
        <div className='pokemon-card-container'>
            <div className='pokemon-card-grid'>
            {pokemons && pokemons.map((data: basicPokemonType) => (
                <div
                    className="pokemon-card-item"
                    onClick={async () => {
                      navigate(`/${data.id}`)
                    }}>
                        <img
                            src={data.image}
                            alt=""
                            className="pokemon-card-image"
                            loading="lazy"
                        />
                    <div className='pokemon-name'>{data.name} #{data.id}</div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default SearchResults
