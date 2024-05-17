import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Services from "./Pages/services/Services";
import StruServices from "./Pages/services/StruServices";
import MepServices from "./Pages/services/MepServices"
import SupportServices from "./Pages/services/SupportServices"



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
          <Route    path="/about" element={<About />}></Route>
          <Route    path="/contact" element={<ContactUs />}></Route>
          <Route    path="/service" element={<Services />}></Route>
          <Route    path="/service/structural" element={<StruServices />}></Route>
          <Route    path="/service/mep" element={<MepServices />}></Route>
          <Route    path="/service/support" element={<SupportServices />}></Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
