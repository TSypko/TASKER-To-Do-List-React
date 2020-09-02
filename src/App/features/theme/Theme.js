import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { GlobalStyles } from "./Globalstyle";
import { useSelector } from "react-redux";
import { selectTheme } from "./themeSlice"
import Wrapper from '../../common/Wrapper';
import FlexContainer from '../../common/FlexContainer';
import Switch from "./Switch";

function Theme({ body }) {

    const { theme } = useSelector(selectTheme);

    useEffect(() => {
        localStorage.setItem("currentTheme",
            JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
            <GlobalStyles />
            <Wrapper>
                <FlexContainer>
                    <Switch />
                    {body}
                </FlexContainer>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Theme;
