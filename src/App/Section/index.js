import React from 'react';
import { SectionContainer, SectionHeader } from "./styled";

const Section = ({ title, body }) => (
    <SectionContainer>
        <SectionHeader>{title}</SectionHeader>
        {body}
    </SectionContainer>
)

export default Section;