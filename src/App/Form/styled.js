import styled from "styled-components";

export const FormContainer = styled.form`
        display: flex;

        @media (max-width: 575px) {
             flex-direction: column;
        }
    `;

export const FormInput = styled.input`
         width: 100%;
         padding: 10px 20px;
    `;
    
export const FormButton = styled.button`
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        min-width: max-content;
        background-color: var(--section-text-color);
        color: var(--section-bg-color);
        letter-spacing: 1px;
        padding: 10px 10px;
        margin-left: 10px;
        transition: color 0.4s, transform 0.1s, background-color 0.4s;

        @media (max-width: 575px) {
            margin-top: 10px;
            margin-left: 0px;
        }

        &:hover {
            background-color: var(--section-bg-color);
            color: var(--section-text-color);
            border: 1px solid var(--section-text-color);
            font-weight: bold;
            padding-left: 7px;
        }
        &:active {
            border: 1px solid var(--section-text-color);
            transform: scale(0.9);
        }
    `;