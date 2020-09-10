import React from "react";
import Tasks from "./features/tasks/Tasks";
import Theme from "./features/theme/Theme";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/theme/themeSlice";
import { GlobalStyles } from "./features/theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./../App/features/theme/themes";
import Wrapper from './common/Wrapper';
import FlexContainer from './common/FlexContainer';


function App() {

  const { theme } = useSelector(selectTheme);

  return (
      <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
        <GlobalStyles />
        <Wrapper>
          <FlexContainer>
            <Theme />
            <Tasks />
          </FlexContainer>
        </Wrapper>
      </ThemeProvider>
  );
};

export default App;
