import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { GlobalStyles } from "./Globalstyle";
import { useLocalStorageState } from "./useLocalStorageState";
import { useTasks } from "./useTasks";
import Wrapper from './Wrapper';
import FlexContainer from './FlexContainer';
import Switch from './Switch';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import Footer from './Footer';

function App() {

  const [hideDone, setHideDone] = useLocalStorageState("hideDone", false);
  const [theme, setTheme] = useLocalStorageState("currentTheme", "light");
  
  const { tasks,
    addTask,
    editTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    removeAllTasks,
    toggleEditTask,
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
    <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
      <GlobalStyles/>
      <Wrapper>
        <FlexContainer>
          <Switch
            onChange={themeChange}
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
                  toggleEditTask={toggleEditTask}
                  editTask={editTask}
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
