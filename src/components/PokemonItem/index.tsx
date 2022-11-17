import { Link } from 'react-router-dom';
import { PokemonsInfoType } from '../../types/PokemonsInfoType';
import * as S from './styles';

export const PokemonItem = ( { name, id, img, specie1, specie2 }: PokemonsInfoType ) => {

    return (
        <S.GridItem>
            <Link to={`AboutPokemon/${id}`}>
                <p>#{id < 10 ? `0${id}` : id}</p>
                <img src={img} />
                <h3>{name}</h3>
                {specie2 != '' ? <p>{specie1} | {specie2}</p> : <p>{specie1}</p> }
            </Link>
        </S.GridItem>
    );
};  