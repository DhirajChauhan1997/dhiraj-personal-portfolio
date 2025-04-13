import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "../pages/Home";
import { ROUTES } from "./Route";
const AppRoutes: React.FC = () => {
  return (
    <Router basename={ROUTES.HOME}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />

        {/* <Route element={<ProtectedRoute allowedRoles={["TEACHER"]} />}>
            <Route
              path={ROUTES.CLASS_TEACHER_DASHBOARD}
              element={<ClassTeacherDashboard />}
            />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["CHILD"]} />}>
            <Route path={ROUTES.DASHBOARD} element={<ChildDashboard />} />
          </Route>

          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes> */}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
