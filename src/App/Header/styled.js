import styled from "styled-components";

export const HeaderContainer  = styled.header`
        margin: 10px auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `;

    
export const HeaderSection  = styled.section`
        display: flex;
        justify-content: center;
        background-color: var(--section-bg-color);
        color: var(--section-text-color);
        width: 100%;
        padding: 20px;
        box-shadow: 1px 1px 2px 1px var(--section-shadow-color);
    `;

export const HeaderTitle  = styled.h1`
        text-transform: capitalize;
        color: var(--section-text-color);
        font-size: 40px;
        text-align: center;   

        @media (max-width: 767px) {
            font-size: 30px;
        }
    `;
