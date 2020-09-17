import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const ListItem = styled.li`
    padding-top: 10px;
`;

export const LinkItem = styled(NavLink).attrs(() => ({
    activeClassName
}))`
    padding: 10px 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.sectionText};
    transition: color 0.4s, transform 0.1s, background-color 0.4s;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.sectionBackground};
        color: ${({ theme }) => theme.colors.sectionText};
        border: 1px solid ${({ theme }) => theme.colors.sectionText};
        margin: 0px -1px;
    }

    &:active {
        border: 1px solid black;
    }

    &.${activeClassName} {
        background-color: ${({ theme }) => theme.colors.sectionText};
        color: ${({ theme }) => theme.colors.sectionBackground};

        &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.sectionBackground};
            color: ${({ theme }) => theme.colors.sectionText};
            border: 1px solid ${({ theme }) => theme.colors.sectionText};
        }
    }
`;