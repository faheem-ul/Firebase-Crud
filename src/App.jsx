import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

import { AuthContext } from "./context/Auth.context";

import Home from "./components/Home";
import Crud from "./components/Crud";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const { user, loading } = useContext(AuthContext);
  console.log("context user", user);

  return (
    <Router>
      {!loading && (
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />} />

          {/* public and restricted routes */}
          <Route element={<PublicRoutes restricted user={user} />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* private routes */}

          <Route path="crud" element={<PrivateRoutes />}>
            <Route path="/crud" element={<Crud />} exact />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
