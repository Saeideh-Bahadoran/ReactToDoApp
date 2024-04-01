import "./App.css";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  // comment
  return (
    <div>
      {/* Your main app content */}
      <h1>Welcome to Time Maker</h1>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
