import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
`;

export const HeaderSection = styled.section`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.sectionBackground};
    color: ${({ theme }) => theme.colors.sectionText};
    width: 100%;
    box-shadow: 1px 1px 2px 1px ${({ theme }) => theme.colors.shadow};
`;

export const HeaderTitle = styled.h1`
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.sectionText};
    font-size: 40px;
    text-align: center;   

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
        font-size: 30px;
    }
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
    display: flex;
`;
