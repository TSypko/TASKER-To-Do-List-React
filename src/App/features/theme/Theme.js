import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { GlobalStyles } from "./Globalstyle";
import { useLocalStorageState } from "../../useLocalStorageState";
import Wrapper from '../../common/Wrapper';
import FlexContainer from '../../common/FlexContainer';
import Switch from "./Switch";

function Theme({ body }) {

    const [theme, setTheme] = useLocalStorageState("currentTheme", "light");

    const themeChange = () => {
        if (theme === "light") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        };
    };

    return (
        <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
            <GlobalStyles />
            <Wrapper>
                <FlexContainer>
                    <Switch
                        onChange={themeChange}
                    />
                    {body}
                </FlexContainer>
            </Wrapper>
        </ThemeProvider>
    )
};

export default Theme;
