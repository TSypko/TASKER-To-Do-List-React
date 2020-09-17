import React from "react";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Theme from "./features/theme/Theme";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { selectTheme } from "./features/theme/themeSlice";
import { GlobalStyles } from "./features/theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./../App/features/theme/themes";
import Wrapper from './common/Wrapper';
import FlexContainer from './common/FlexContainer';
import Menu from "./common/Menu";
import Author from "./features/author/AboutPage";

function App() {

  const { theme } = useSelector(selectTheme);

  return (
    <ThemeProvider
      theme={theme === "light" ? themes.light : themes.dark
      }>
      <GlobalStyles />
      <HashRouter>
        <Wrapper>
          <FlexContainer>
            <Theme />
            <Menu />
            <Switch>
              <Route path="/tasks/:id">
                <TaskPage />
              </Route>
              <Route path="/tasks">
                <TasksPage />
              </Route>
              <Route path="/author">
                <Author />
              </Route>
            </Switch>
          </FlexContainer>
        </Wrapper>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
