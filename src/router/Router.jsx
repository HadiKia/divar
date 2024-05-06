import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AdminPage from "pages/AdminPage";
import PageNotFound from "pages/404";
import Loader from "components/Loader";
import DetailsPage from "pages/DetailsPage";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:id" element={<DetailsPage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/" />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
