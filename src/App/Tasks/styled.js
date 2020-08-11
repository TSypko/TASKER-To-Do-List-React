import styled, { css } from "styled-components";
import checked from "./checked.svg";
import trash from "./trash.svg";

export const Statement = styled.span`
    font-weight: 400;
    font-size: 14px;
    font-style: italic;

    ${({ content }) => content && css`
        &::after {
            content: "Done tasks are hidden";
        }
    `}
`;

export const Paragraph = styled.p`
    font-weight: 400;
    max-width: 100%;
    text-align: justify;
    flex-grow: 1;
    font-size: 20px;
    overflow-wrap: break-word;
    word-wrap: break-word;

    @media (max-width: 575px) {
        font-size: 16px;
    }

    ${({ centered }) => centered && css`
        text-align: center;
        font-style: italic;
    `}
    ${({ done }) => done && css`
        text-decoration: line-through;
        font-style: italic;
    `}
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0px;
    background-color: ${({ theme }) => theme.section_bg};    
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.section_text};   

    @media (max-width: 175px) {
        flex-wrap: wrap;
    }
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    min-width: 30px;
    min-height: 30px;
    transition: color 0.4s;
    transition: transform 0.1s;
    border-radius: 5px;
    background-position: center;
    transition: background-color 0.4s;
    background-repeat: no-repeat;

    @media (max-width: 359px) {
        min-width: 25px;
        min-height: 25px;
    }
    
    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.greenButton};
        margin-right: 15px;

        &:hover {
            background-color: ${({ theme }) => theme.greenButton_lighter};
        }
        &:active {
            transform: scale(0.85);
        }
    `}

    ${({ done }) => done && css`
        background-image: url(${checked});
        background-size: 75%;
    `}
    
    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.redButton};
        background-image: url(${trash});
        background-size: 85%;
        margin-left: 15px;

        &:hover {
            background-color: ${({ theme }) => theme.redButton_lighter};
        }
        &:active {
            transform: scale(0.85);
        }
    `}

    ${({ removeToggled }) => removeToggled && css`
        background-image: ${checked};
        background-size: 75%;
    `}
`;