import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Crud from "./components/Crud";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
