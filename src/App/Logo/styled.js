import styled from "styled-components";

export const Image = styled.img`
        align-self: center;
        margin: 10px;
        width: 70px;
        filter: var(--svg-image--color);

        @media (max-width: 767px) {
            max-width: 60%;
        }
    `;