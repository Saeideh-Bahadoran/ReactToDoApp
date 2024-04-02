import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import TasksList from "./Components/TasksList";

function App() {


  const [count, setCount] = useState(0);
  // comment

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
      <TasksList/>


    </div>


  );
}

export default App;
