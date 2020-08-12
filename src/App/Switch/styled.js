import styled, { css } from "styled-components";

export const SwitchContainer = styled.aside`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px auto;
    max-width: 800px;
`;

export const Label = styled.label`
    font-weight: 700;
    color: ${({ theme }) => theme.sectionText};
    margin-right: 10px;

    ${({ toggle }) => toggle && css`
        position: relative;
        display: block;
        padding: 5px 10px;
        width: 65px;
        background-color: ${({ theme }) => theme.switch};
        background-image: ${({ theme }) => theme.switch};
        transition: all 0.5s;
        cursor: pointer;
        box-shadow: 1px 1px 2px 1px ${({ theme }) => theme.shadow};

        &::after {
            content: "";
            display: block;
            height: 20px;
            width: 20px;
            background-color: ${({ theme }) => theme.background};
            border: 1px solid ${({ theme }) => theme.sectionText};
            transition: all 0.3s;
            transform: ${({ theme }) => theme.translate};;
        }

        &:hover {
            background-image: linear-gradient(to right, #2a3a41, #c4bb91);
        }
    `}

`;

export const Button = styled.button`
    display: none;

    ${({ toggled }) => toggled && css`   
        +Label::after {
            transform: ${({ theme }) => theme.translate};;
        }
    `}
`;