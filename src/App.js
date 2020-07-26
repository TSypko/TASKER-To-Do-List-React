import React, { useState, useEffect } from "react";
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

  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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

  return (
    <>
      <Switch />
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
    </>
  );
}

export default App;
