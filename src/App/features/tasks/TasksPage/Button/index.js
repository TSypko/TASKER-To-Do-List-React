import styled, { css } from "styled-components";

export default styled.button`
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    color: #ffffff;
    letter-spacing: 1px;
    margin: 10px;
    transition: color 0.4s;
    transition: transform 0.1s;
    transition: background-color 0.4s;

    ${({ green }) => green && css`
        background-color: ${({ theme }) => theme.colors.greenButton};
        transition: 0.5s;

        &:hover {
            filter: brightness(110%);
        }
        
        &:active {
            transform: scale(0.9);
            filter: brightness(120%);
        }
        &:disabled {
            background-color: #ccc;
            filter: brightness(100%);
            cursor: default;
        }
    `}

    ${({ red }) => red && css`
            background-color: ${({ theme }) => theme.colors.redButton};
            transition: 0.3s;

        &:hover {
            background-color: ${({ theme }) => theme.colors.redButtonLighter};
        }
        
        &:active {
            transform: scale(0.9);
        }
    `}
`;