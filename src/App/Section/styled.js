import styled from "styled-components";

export const SectionContainer = styled.section`
        background-color: var(--section-bg-color);
        color: var(--section-text-color);
        width: 100%;
        padding: 20px;
        margin: 10px 0px;
        box-shadow: 1px 1px 2px 1px var(--section-shadow-color);
    `;
export const SectionHeader = styled.h2`
        text-transform: uppercase;
        font-size: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid;
        border-color: var(--section-text-color);
    `;