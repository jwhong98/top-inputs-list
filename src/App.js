import { useState } from "react";
import Overview from "./components/Overview";

// Function: Handles input field and related logic
function App() {
  const [tasks, setTasks] = useState([]);
  const onClickHandler = (e) => {
    // e.preventDefault();
    const input = document.getElementById("taskInput");
    setTasks((oldTasks) => [...oldTasks, input.value]);
  };

  return (
    <div className="App">
      <input type="text" id="taskInput" />
      <label htmlFor="taskInput">Tasks:</label>
      <button onClick={onClickHandler}>Submit</button>
      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
