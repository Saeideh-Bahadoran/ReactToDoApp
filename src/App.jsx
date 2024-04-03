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

function App() {
  const [count, setCount] = useState(0);
  // comment

  return (
    <div className="pages">
      <Navbar />
      <Sidebar />
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
        <Route path="/TaskDetailsPage" element={<TaskDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
