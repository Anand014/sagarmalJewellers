import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Pendants from "./Screens/ProductPage/Pendants/Pendants";
import Footer from "./Components/Footer/Footer";
import Bracelets from "./Screens/ProductPage/Bracelets/Bracelets";
import Chains from "./Screens/ProductPage/Chains/Chains";
import Earrings from "./Screens/ProductPage/Earrings/Earrings";
import Rings from "./Screens/ProductPage/Rings/Rings";
import Watches from "./Screens/ProductPage/Watches/Watches";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/pendants" component={Pendants} exact />
          <Route path="/bracelets" component={Bracelets} exact />
          <Route path="/watches" component={Watches} exact />
          <Route path="/rings" component={Rings} exact />
          <Route path="/earrings" component={Earrings} exact />
          <Route path="/chains" component={Chains} exact />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
