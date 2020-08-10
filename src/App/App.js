import React, { useState, useEffect } from "react";
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

  const { tasks,
    addTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    removeAllTasks
  } = useTasks();

  const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")) || false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  useEffect(() => localStorage.setItem("hideDone",
    JSON.stringify(hideDone)), [hideDone]);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : ""
  );

  const [buttonState, setButtonState] = useState(
    localStorage.getItem("buttonState")
      ? localStorage.getItem("buttonState")
      : "switch__button"
  )

  const themeChange = () => {
    if (!theme) {
      setTheme("dark")
      setButtonState("switch__button switch__button-toggled");

    } else {
      setTheme("")
      setButtonState("switch__button");
    }
  };

  useEffect(() => localStorage.setItem("theme", (theme)), [theme]);
  useEffect(() => localStorage.setItem("buttonState", (buttonState)), [buttonState]);

  return (
    <Wrapper theme={theme}>
      <FlexContainer>
        <Switch
          value={theme}
          state={buttonState}
          event={themeChange}
        />
        <Header title="TASKER" />
        <Main>
          <Section
            title="add new task"
            body={
              <Form addTask={addTask} />
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
  );
}

export default App;
