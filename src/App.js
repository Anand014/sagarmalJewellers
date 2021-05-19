import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Route path="/" component={Home} exact />
        </main>
      </Router>
    </>
  );
}

export default App;
