// App.js
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/Pages/HomePage";
import AboutPage from "./assets/Pages/AboutPage";
import NotFoundPage from "./assets/Pages/NotFoundPage";
import TaskDetailsPage from "./assets/Pages/TaskDetailsPage";
import EditPage from "./assets/Pages/EditPage";
import ContactsPage from "./assets/Pages/ContactsPage";

function App() {
  const [tasks, setTasks] = useState([
    { "id": "0", "task": "Read the project brief", "completed": true},
    { "id": "1", "task": "Create a project repository", "completed": true},
    { "id": "2", "task": "Create React application using Vite", "completed": false},
    { "id": "3", "task": "Finish Day 1 Development Tasks", "completed": false},
    { "id": "4", "task": "Finish Day 1 Research Tasks", "completed": false},
    { "id": "5", "task": "Finish Day 2 Development Tasks", "completed": false},
    { "id": "6", "task": "Finish Day 2 Research Tasks", "completed": false}
  ]);
 
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);

  const toggleAddTaskVisibility = () => {
    setIsAddTaskVisible(!isAddTaskVisible);
  };

  return (
    <div className="pages">
      <Navbar />
      <Sidebar toggleAddTaskVisibility={toggleAddTaskVisibility} />
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} setTasks={setTasks} isAddTaskVisible={isAddTaskVisible}  />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage/>} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/task-details/:taskId" element={<TaskDetailsPage tasks={tasks} />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;


