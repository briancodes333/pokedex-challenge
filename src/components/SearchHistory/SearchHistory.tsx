import { useNavigate } from "react-router-dom";
import { basicPokemonType, genericPokemonType } from "../../utils/Types";
import "./SearchHistory.scss";

const SearchHistory = ({ searches }: { searches: basicPokemonType[] }) => {
    const navigate = useNavigate();

  return (
    <div className='recently-searched-container'>
        <h2 className='recently-searched-title'>Recently Searched</h2>
        <div className="history-container">
            {searches && searches.map((data: basicPokemonType) => (
                <div 
                    className="history-link"
                    onClick={async () => {
                        navigate(`/${data.id}`);
                        }}>
                    <div className='search-name'>{data.name}</div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default SearchHistory;
