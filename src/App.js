import React from "react";
import Switch from './Switch';
import Header from './Header';
import Logo from "./Logo";
import Main from './Main';
import Section from './Section';
import Form from './Form';
import Tasks from './Tasks';
import Footer from './Footer';
import Buttons from './Buttons';


const tasks = [
  { id: 1, content: "Oglądnąć lekcje o React", done: true },
  { id: 2, content: "Eksport To Do List do Reacta", done: true },
  { id: 3, content: "Dodać interakcje", done: false },
];
const hideDoneTasks = false;


function App() {
  return (
    <React.Fragment>
      <Switch />
      <Header title="TASKER" body={<Logo altText="logotype" />}>
      </Header>
      <Main>
        <Section title="add new task" body={<Form placeHolderText={"write your task here"} />} />
        <Section title="task list" body={<Tasks key={tasks} tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      </Main>
      <Footer>
        <Section classModificator={"section--footer"} body={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      </Footer>
    </React.Fragment>
  );
}

export default App;
