import * as S from './styles';
import { useState, useEffect } from 'react';

//images
import { PokemonItem } from '../../components/PokemonItem';
import { PokemonItemType } from '../../types/PokemonItemType';
import { api } from '../../api';
import { Loading } from '../../components/Loading';
import { BsSearch } from 'react-icons/bs';

//components

//types

export const Home = () => {

    const [pokemonsInfo, setPokemonsInfo] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemonName, setPokemonName] = useState<string>('');

    useEffect( () => {
        loadPokemonList();
    }, []);

    useEffect(() => {
        searchPokemon();
    }, [pokemonName])

    const loadPokemonList = async () => {
        setLoading(true);
        const response = await api.getAllPokemons();
        const data: PokemonItemType[] = response.results;
        loadPokemonInfoList(data);
    };

    const loadPokemonInfoList = async (data: PokemonItemType[]) => {
        const arrayUrlPokemons = [];

        for(let i=0; i<data.length; i++) {
            arrayUrlPokemons.push(data[i].url);
        };

        const response = await api.getAllPokemonsInfo(arrayUrlPokemons);
        setPokemonsInfo(response);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    };

    const searchPokemon = () => {
        if (pokemonName === '') {
            loadPokemonList();
        };
        const newArrayPokemons = pokemonsInfo.filter((item) => {
            if (item.data.name == pokemonName.toLowerCase()) {
                return item;
            };
        });
        if (newArrayPokemons.length > 0) {
            setPokemonsInfo(newArrayPokemons);
        };
    };

    return (
        <>
                {loading &&
                    <Loading />
                }                
                {!loading &&
                    <S.Main>
                        <div className="input-area">
                            <input 
                                type="text"
                                placeholder='Procure seu pokemon'
                                value={pokemonName}
                                onChange={e => setPokemonName(e.target.value)}
                            />
                            <button><BsSearch /></button>
                        </div>
                        <S.Grid>
                            {   
                                pokemonsInfo.map((item, index) => (
                                    <PokemonItem 
                                    name={item.data.name} 
                                    id={item.data.id} 
                                    img={item.data.sprites.front_default} 
                                    specie1={item.data.types[0].type.name} 
                                    specie2={
                                        item.data.types.length > 1 ?
                                        item.data.types[1].type.name :
                                        ''}  
                                    key={index} />
                                ))
                            }
                        </S.Grid>
                    </S.Main>
                }
        </>
    );
};