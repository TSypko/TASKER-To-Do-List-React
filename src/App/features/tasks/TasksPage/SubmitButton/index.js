import styled from "styled-components";

export default styled.button`
text-transform: uppercase;
cursor: pointer;
border: none;
min-width: max-content;
background-color: ${({ theme }) => theme.colors.sectionText};
color: ${({ theme }) => theme.colors.sectionBackground};
letter-spacing: 1px;
padding: 5px 10px;
margin-left: 10px;
margin-bottom: 10px;
transition: color 0.4s, transform 0.1s, background-color 0.4s;

@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 10px;
    margin-left: 0px;
}

&:hover {
    background-color: ${({ theme }) => theme.colors.sectionBackground};
    color: ${({ theme }) => theme.colors.sectionText};
    border: 1px solid ${({ theme }) => theme.colors.sectionText};
    font-weight: bold;
    padding-left: 7px;
}
&:active {
    border: 1px solid ${({ theme }) => theme.colors.sectionText};
    transform: scale(0.9);
}
`;