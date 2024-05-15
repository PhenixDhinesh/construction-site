import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import {
  HashRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route    path="/" element={<Home />}></Route>
          <Route    path="/service" element={<Services />}></Route>
          <Route    path="/about" element={<About />}></Route>
          <Route    path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
