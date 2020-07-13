import React from "react";
import Switch from './Switch';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import Footer from './Footer';

const tasks = [
  { id: 1, content: "Oglądnąć lekcje o React", done: true },
  { id: 2, content: "Eksport To Do List do Reacta", done: true },
  { id: 3, content: "Dodać interakcje", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
    <>
      <Switch />
      <Header title="TASKER" />
      <Main>
        <Section title="add new task" body={<Form />} />
        <Section title="task list" body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      </Main>
      <Footer tasks={tasks} hideDoneTasks={hideDoneTasks}/>
    </>
  );
}

export default App;
