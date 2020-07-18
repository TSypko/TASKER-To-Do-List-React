import React, { useState } from "react";
import Switch from './Switch';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import Footer from './Footer';

function App() {

  const [tasks, setTasks] = useState([]);

  const [hideDone, setHideDone] = useState(false);
  const toggleHide = () => {
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
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))

  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))

  };

  const removeAllTasks = () => {
    setTasks(tasks => tasks = [])
  };


  return (
    <>
      <Switch />
      <Header title="TASKER" />
      <Main>
        <Section
          title="add new task"
          body={<Form addTask={addTask} />} />
        <Section
          title="task list"
          body={<Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />} />
      </Main>
      <Footer
        tasks={tasks}
        hideDone={hideDone}
        toggleHide={toggleHide}
        setAllDone={setAllDone}
        removeAllTasks={removeAllTasks}
      />
    </>
  );
}

export default App;
