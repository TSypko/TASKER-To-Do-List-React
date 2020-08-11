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
        background-color: ${({ theme }) => theme.section_text};
        color: ${({ theme }) => theme.section_bg};
        letter-spacing: 1px;
        padding: 10px 10px;
        margin-left: 10px;
        transition: color 0.4s, transform 0.1s, background-color 0.4s;

        @media (max-width: 575px) {
            margin-top: 10px;
            margin-left: 0px;
        }

        &:hover {
            background-color: ${({ theme }) => theme.section_bg};
            color: ${({ theme }) => theme.section_text};
            border: 1px solid ${({ theme }) => theme.section_text};
            font-weight: bold;
            padding-left: 7px;
        }
        &:active {
            border: 1px solid ${({ theme }) => theme.section_text};
            transform: scale(0.9);
        }
    `;