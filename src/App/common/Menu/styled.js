import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const ListItem = styled.li`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.sectionText};
    
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
`;