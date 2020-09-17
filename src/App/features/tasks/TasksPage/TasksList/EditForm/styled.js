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