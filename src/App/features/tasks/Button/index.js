import styled, { css } from "styled-components";

export default styled.button`
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 10px;
    transition: color 0.4s;
    transition: transform 0.1s;
    transition: background-color 0.4s;

    ${({ doneAll }) => doneAll && css`
        background-color: ${({ theme }) => theme.colors.greenButton};
        border-radius: 5px;
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

    ${({ hideDone }) => hideDone && css`
            background-color: ${({ theme }) => theme.colors.greenButton};
            border-radius: 5px;
            transition: 0.3s;

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

    ${({ removeAll }) => removeAll && css`
            background-color: ${({ theme }) => theme.colors.redButton};
            border-radius: 5px;
            transition: 0.3s;

        &:hover {
            background-color: ${({ theme }) => theme.colors.redButtonLighter};
        }
        
        &:active {
            transform: scale(0.9);
        }
    `}
`;