import React from 'react';
import { HeaderContainer, HeaderSection, HeaderTitle, LinkItem } from "./styled";
import Logo from "./Logo";

const Header = ({ title }) => (
    <HeaderContainer>
        <HeaderSection>
            <LinkItem to="/">
                <Logo />
                <HeaderTitle>{title}</HeaderTitle>
            </LinkItem>
        </HeaderSection>
    </HeaderContainer>
);

export default Header;