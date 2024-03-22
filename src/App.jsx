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
  // console.log("context user", user);
  // console.log("loading", loading);

  return (
    <Router>
      {!loading && (
        <Routes>
          {/* public routes */}
          <Route element={<PublicRoutes user={user} loading={loading} />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* public and restricted routes */}
          <Route
            element={<PublicRoutes restricted user={user} loading={loading} />}
          >
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* private routes */}

          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/crud" element={<Crud />} exact />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
