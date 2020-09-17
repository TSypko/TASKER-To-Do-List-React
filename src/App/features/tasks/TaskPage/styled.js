
import styled, { css } from "styled-components";

export const DateParagraph = styled.p`
font-weight: 400;
max-width: 100%;
flex-grow: 1;
margin: 5px 0px; 

${({ hidden }) => hidden && css`
    display: none;
`}

${({ done }) => done && css`
    text-decoration: line-through;
    font-style: italic;
`}

@media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: 12px;
}
`;

export const Date = styled.span`
${({ edited }) => edited && css`
    font-size: 14px;
    font-style: italic;

`}

`;
