import { Oval } from 'react-loader-spinner';
import * as S from './styles';

export const Loading = () => {
    return (
        <S.Container>
            <Oval
                height={80}
                width={80}
                color="#FAC705"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#FAC705"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </S.Container>
    );
};  