import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      Day: "Feb 5th at 2:30pn",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      Day: "Feb 6th at 1:30pn",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
