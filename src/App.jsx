import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  const [count, setCount] = useState(0);
  // comment
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
