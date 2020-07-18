import React, { useState } from "react";
import Switch from './Switch';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import Footer from './Footer';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, content: "Oglądnąć lekcje o React", done: true },
    { id: 2, content: "Eksport To Do List do Reacta", done: true },
    { id: 3, content: "Dodać interakcje", done: false }
  ])

  const [hideDone, setHideDone] = useState(false)
  const toggleHide = () => {
    setHideDone(hideDone => !hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))

  }

  return (
    <>
      <Switch />
      <Header title="TASKER" />
      <Main>
        <Section
          title="add new task"
          body={<Form />} />
        <Section
          title="task list"
          body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />} />
      </Main>
      <Footer
        tasks={tasks} hideDone={hideDone} toggleHide={toggleHide} />
    </>
  );
}

export default App;
