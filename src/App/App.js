import React from "react";
import Tasks from "./features/tasks/Tasks";
import Theme from "./features/theme/Theme";

function App() {

  return (
    <Theme body={<Tasks />} />
  );
}

export default App;
