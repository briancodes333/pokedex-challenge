import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPokemonData } from "../../app/reducers/getPokemonData";
import './Pokemon.scss';
import { PokemonAbilityType, PokemonStatType, PokemonType } from "../../utils/Types";
import { addToRecentlySearched } from "../../app/slices/HistorySlice";

const Pokemon = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { currentPokemon } = useAppSelector(
        ({ pokemon }) => pokemon
    );
    const { name, id, stats, abilities, height, weight, types, sprites } = currentPokemon || {};

    useEffect(() => {
        dispatch(getPokemonData(params.id || ""));
    }, [dispatch]);

    useEffect(() => {
        dispatch(dispatch(addToRecentlySearched(currentPokemon)));
    }, [currentPokemon]);


    return (
        <div className="pokemon-container">
            <div className="pokemon-image-container">
                <img src={sprites?.front_default} alt="" className="pokemon-image" loading="lazy" />
            </div>
            <div className="pokemon-header">
                <div className="pokemon-header-title">{name} #{id}</div>
            </div>
            <div className="pokemon-stat-card-container">
                <div className="pokemon-stat-card">
                    <div className="pokemon-stat-grid">
                        <h2 className="pokemon-stats">Height: {(height ?? 0) / 10} meters</h2>
                        <h2 className="pokemon-stats">Weight: {(weight ?? 0) / 10} kilograms</h2>
                        <h2 className="pokemon-stats">Abilities: {abilities?.map((ability: PokemonAbilityType) => ability.ability.name).join(", ")}</h2>
                        <h2 className="pokemon-stats">Stats: {stats?.map((stat: PokemonStatType) => stat.stat.name).join(", ")}</h2>
                        <h2 className="pokemon-stats">Types: {types?.map((type: PokemonType) => type.type.name).join(", ")}</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pokemon