import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import BackdropUI from "../components/atoms/Backdrop";
import { useAuth } from "../usecases/useAuth";
const Home = React.lazy(() => import('../views/Home'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));
const Login = React.lazy(() => import('../views/Login'));
import Layout from "../layout";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated, 'tes')
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <Outlet />
}

const AppRouter = () => {

  return (
    <React.Suspense fallback={<BackdropUI />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>

  );
};
export default AppRouter;
