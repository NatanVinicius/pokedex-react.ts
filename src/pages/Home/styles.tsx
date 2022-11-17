import styled from "styled-components";

export const Main = styled.main`
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #fafafa;

    .input-area {
        max-width: 800px;
        width: 100%;
        height: 60px;
        margin-top: 40px;
        padding: 10px;
        display: flex;
        background-color: #ececec;
        border-radius: 10px;

        input {
            border: none;
            outline: 0;
            flex: 1;
            padding: 0 10px;
            background-color: transparent;
        };

        button {
            width: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #52B0FF;
            outline: none;
            border: none;
            color: #FFF;
            font-size: 1.6rem;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;

            :hover {
                font-size: 1.7rem;
            };
        };
    };
`;

export const Grid = styled.div`
    display: grid;
    padding: 20px 0;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;