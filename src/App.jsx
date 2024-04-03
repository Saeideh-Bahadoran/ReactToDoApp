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
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/taskdetails" element={<TaskDetailsPage />} />
      </Routes>
    </div>
  );
}

/** <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div> */

export default App;
