import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import TasksList from "./Components/TasksList";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/Pages/HomePage";
import AboutPage from "./assets/Pages/AboutPage";
import NotFoundPage from "./assets/Pages/NotFoundPage";
import TaskDetailsPage from "./assets/Pages/TaskDetailsPage";
// import tasksData from "tasks.json";

function App() {
  const [tasks, setTasks] = useState(
    [
      { "id": "0", "task": "Read the project brief", "completed": true},
      { "id": "1", "task": "Create a project repository", "completed": true},
      { "id": "2", "task": "Create React application using Vite", "completed": false},
      { "id": "3", "task": "Finish Day 1 Development Tasks", "completed": false},
      { "id": "4", "task": "Finish Day 1 Research Tasks", "completed": false},
      { "id": "5", "task": "Finish Day 2 Development Tasks", "completed": false},
      { "id": "6", "task": "Finish Day 2 Research Tasks", "completed": false}
    ]
  )
  const [count, setCount] = useState(0);
  // comment

  return (
    <div className="pages">
      <Navbar />
      <Sidebar />
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} setTasks= {setTasks} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/task-details/:taskId" element={<TaskDetailsPage tasks={tasks} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
