import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyles } from "./Globalstyle";
import { useLocalStorageState } from "./useLocalStorageState";
import { useTasks } from "./useTasks";
import Wrapper from './Wrapper';
import FlexContainer from './Wrapper/FlexContainer';
import Switch from './Switch';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import Footer from './Footer';

function App() {

  const [hideDone, setHideDone] = useLocalStorageState("hideDone", false);
  const [theme, setTheme] = useLocalStorageState("theme", "light");
  
  const { tasks,
    addTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    removeAllTasks
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const themeChange = () => {
    if (theme === "light") {
      setTheme("dark")
    }
    else { 
      setTheme("light")
   };
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Wrapper>
        <FlexContainer>
          <Switch
            event={themeChange}
          />
          <Header title="TASKER"/>
          <Main>
            <Section
              title="add new task"
              body={
                <Form addTask={addTask}/>
              }
            />
            <Section
              title="task list"
              body={
                <Tasks
                  tasks={tasks}
                  hideDone={hideDone}
                  removeTask={removeTask}
                  toggleTaskDone={toggleTaskDone}
                />
              }
            />
          </Main>
          <Footer
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
            removeAllTasks={removeAllTasks}
          />
        </FlexContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
