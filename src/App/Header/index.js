import React from 'react';
import { HeaderContainer, HeaderSection, HeaderTitle } from "./styled"
import Logo from "../Logo";

const Header = ({ title }) => (
    <HeaderContainer>
        <HeaderSection>
            <Logo />
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderSection>
    </HeaderContainer>
);

export default Header;