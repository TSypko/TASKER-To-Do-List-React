import React, { useState, useEffect } from "react";
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

  const savedTasks = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(
    savedTasks
      ? savedTasks
      : []
  );

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]);

  const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")));
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  useEffect(() => localStorage.setItem("hideDone", JSON.stringify(hideDone)), [hideDone]);

  const addTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content: newTaskContent,
        done: false
      }
    ]
    );
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };
      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : ""
  );

  const [buttonState, setButtonState] = useState(
    localStorage.getItem("button")
      ? localStorage.getItem("button")
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
  useEffect(() => localStorage.setItem("button", (buttonState)), [buttonState]);

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