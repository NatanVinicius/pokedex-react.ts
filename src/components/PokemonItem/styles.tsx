import styled from "styled-components";

export const GridItem = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0.7px #00000049;
    transition: all .2s;
    cursor: pointer;

    :hover {
        box-shadow: 0 0 10px 0.7px #00000094;
    }

    
    a {
        text-decoration: none;
        color: #000;
        text-align: center;
    }

    p {
        color: #b3b3b3;
        font-weight: bold;
    }

    img {
        width: 120px;
        height: 120px;
    }

    h3 {
        text-transform: capitalize;
    }
`;
