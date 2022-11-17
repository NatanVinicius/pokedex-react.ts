import * as S from './styles';
import { useState, useEffect } from 'react';
//
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { PokemonInfo } from '../../components/PokemonInfo';
import { Loading } from '../../components/Loading';

export const AboutPokemon = () => {

    const params = useParams();
    const [infoPokemon, setInfoPokemon] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (params.id) {  
            loadPokemon(params.id);
        }
    }, []);

    const loadPokemon = async (id: string) => {
        setLoading(true);
        const newId = +id;
        const response = await api.getPokemon(newId);
        setTimeout(() => {
            setLoading(false);
            setInfoPokemon(response);
        }, 1000);
    };

    return (
        <S.Container>
            {loading &&
                <Loading />
            }
            {!loading &&
                <PokemonInfo data={infoPokemon} />
            }
        </S.Container>
    );
};