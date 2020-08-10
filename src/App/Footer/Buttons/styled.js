import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        @media (max-width: 399px) {
            justify-content: center;
        }
    `;
    
export const Button = styled.button`
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
            background-color: var(--greenButton--color);
            border-radius: 5px;
            transition: 0.5s;

            &:hover {
                background-color: var(--greenButtonLighter--color);
            }
            
            &:active {
                transform: scale(0.9);
            }
            &:disabled {
                background-color: #ccc;
                border-radius: 5px;
                cursor: default;
            }
        `}

        ${({ hideDone }) => hideDone && css`
                background-color: var(--greenButton--color);
                border-radius: 5px;
                transition: 0.3s;

            &:hover {
                background-color: var(--greenButtonLighter--color);
            }

            &:active {
                transform: scale(0.9);
            }

            &:disabled {
                background-color: #ccc;
                border-radius: 5px;
                cursor: default;
            }
        `}

        ${({ removeAll }) => removeAll && css`
                background-color: var(--redButton--color);
                border-radius: 5px;
                transition: 0.3s;

            &:hover {
                background-color: var(--redButtonLighter--color);
            }
            
            &:active {
                transform: scale(0.9);
            }
        `}
    `;