import styled, { css } from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-wrap: wrap;
    }
`;

export const EditFormInput = styled.input`
    width: 100%;
    padding: 5px 20px; 
    display: none;

    ${({ edit }) => edit && css`
        display: unset;
    `}   
`;

export const Button = styled.button`
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    min-width: max-content;
    background-color: ${({ theme }) => theme.colors.sectionText};
    color: ${({ theme }) => theme.colors.sectionBackground};
    letter-spacing: 1px;
    padding: 5px 10px;
    margin-left: 10px;
    transition: color 0.4s, transform 0.1s, background-color 0.4s;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 10px;
        margin-left: 0px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.sectionBackground};
        color: ${({ theme }) => theme.colors.sectionText};
        border: 1px solid ${({ theme }) => theme.colors.sectionText};
        font-weight: bold;
        padding-left: 7px;
    }
    &:active {
        border: 1px solid ${({ theme }) => theme.colors.sectionText};
        transform: scale(0.9);
    }
`;