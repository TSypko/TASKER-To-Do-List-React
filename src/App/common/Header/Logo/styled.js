import styled from "styled-components";

export const Image = styled.img`
    align-self: center;
    margin: 10px;
    width: 70px;
    filter: ${({ theme }) => theme.colors.svgImage};

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
        max-width: 60%;
    }
`;