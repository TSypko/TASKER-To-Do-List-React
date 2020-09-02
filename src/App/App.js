import React from "react";
import TaskList from "./features/tasks/Tasks";
import Theme from "./features/theme/Theme";

function App() {

  return (
    <Theme body={<TaskList />} />
  );
}

export default App;
