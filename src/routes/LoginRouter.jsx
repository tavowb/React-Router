import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          end
          path="/login"
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRouter>
              <AppRouter />
            </PrivateRouter>
          }
        />
        <Route
          path="*"
          element={
            <PublicRouter>
              <Navigate to="/men" />
            </PublicRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
