import styled from "styled-components";

type SpanProps = {
    color: string,
    porc: string
};

export const AreaInfo = styled.div`
    .area-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .area-img {
        img {
            width: 180px;
            height: 180px;
        };
    };
    h3 {
        text-transform: capitalize;
        font-size: 2rem;
    }
`;

export const AreaStats = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    button {
            width: 150px;
            margin: 20px 0;
            padding: 10px 0;
            font-size: 1.3rem;
            border-radius: 10px;
            border: none;
            color: #3E53AC;
            background-color: #FAC705;
            transition: all .2s;
            cursor: pointer;

            :hover {
                
            color: #ffffff;
            }
        }
`;

export const Stats = styled.div<SpanProps>`
        display: flex;
        align-items: center;
        color: #B3C4D8;
        margin: 10px 0;

        .title {
            display: block;
            width: 200px;
            font-size: 1.6rem;
            text-transform: capitalize;
        }

        .value {
            margin: 0 20px;
            font-size: 2rem;
        }

        .progress-div {
            width: 400px;
            height: max-content;
            background-color: #dbdbdb;
            border-radius: 10px;

            span {
                max-width: 100%;
                width: ${props => props.porc}%;
                display: block;
                color: #FFF;
                text-align: center;
                border-radius: 10px;
                background-color: ${props => props.color};
            }
        }
`