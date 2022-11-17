import * as S from './styles';
import { Link } from 'react-router-dom';

export const PokemonInfo = ( data: any ) => {

    return (
        <>
            <S.AreaInfo>
                <div className="area-info">   
                    <div className="area-img">
                        <img src={data.data.sprites.front_default} />
                    </div>
                    <h3>{data.data.name}</h3>
                </div>
            </S.AreaInfo>
            <S.AreaStats>
                <S.Stats color='#ff3232' porc={data.data.stats[0].base_stat}>
                    <p className="title">{data.data.stats[0].stat.name}</p>
                    <div className='progress-div'>
                        <span>{data.data.stats[0].base_stat > 100 ? 100 : data.data.stats[0].base_stat}%</span>
                    </div>
                </S.Stats>

                <S.Stats color='#3269ff' porc={data.data.stats[1].base_stat}>
                    <p className="title">{data.data.stats[1].stat.name}</p>
                    <div className='progress-div'>
                        <span>{data.data.stats[1].base_stat > 100 ? 100 : data.data.stats[1].base_stat}%</span>
                    </div>
                </S.Stats>
                
                <S.Stats color='#32ff4d' porc={data.data.stats[2].base_stat}>
                    <p className="title">{data.data.stats[2].stat.name}</p>
                    <div className='progress-div'>
                        <span>{data.data.stats[2].base_stat > 100 ? 100 : data.data.stats[2].base_stat}%</span>
                    </div>
                </S.Stats>

                <S.Stats color='#f3ff51' porc={data.data.stats[3].base_stat}>
                    <p className="title">{data.data.stats[3].stat.name}</p>
                    <div className='progress-div'>
                        <span>{data.data.stats[3].base_stat > 100 ? 100 : data.data.stats[3].base_stat}%</span>
                    </div>
                </S.Stats>

                <S.Stats color='#008186' porc={data.data.stats[4].base_stat}>
                    <p className="title">{data.data.stats[4].stat.name}</p>
                    <div className='progress-div'>
                        <span>{data.data.stats[4].base_stat > 100 ? 100 : data.data.stats[4].base_stat}%</span>
                    </div>
                </S.Stats>

                <S.Stats color='#32ffee' porc={data.data.stats[5].base_stat}>
                    <p className="title">{data.data.stats[5].stat.name}</p>
                    <div className='progress-div'>
                        <span>{data.data.stats[5].base_stat > 100 ? 100 : data.data.stats[5].base_stat}%</span>
                    </div>
                </S.Stats>
                
                <Link to="/">
                    <button>Voltar</button>
                </Link>
            </S.AreaStats>
        </>
        
    );
};
