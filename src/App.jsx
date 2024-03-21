import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthContext } from "./context/Auth.context";

import Crud from "./components/Crud";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const { user } = useContext(AuthContext);
  console.log("context user", user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* {user && <Route path="/crud" element={<Crud />} />} */}

        {user ? (
          <Route path="/crud" element={<Crud />} />
        ) : (
          <Route path="/crud" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
