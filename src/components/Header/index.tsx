import * as S from './styles';

//images
import logoPokemonHeader  from '../../assets/pokemon-logo-8.png'

//components

//types

export const Header = () => {

    return (
        <>
            <S.Header>
                <img src={logoPokemonHeader} alt="logo-pokemon" />
                </S.Header>
        </>
    );
};