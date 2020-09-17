import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
            flex-direction: column;
    }
`;
