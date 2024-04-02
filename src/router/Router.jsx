import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import ReactLoading from "react-loading";

import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AdminPage from "pages/AdminPage";
import PageNotFound from "pages/404";

function Router() {
  const { data, isLoading, isError } = useQuery(["profile"], getProfile);
  // console.log({ data, isLoading, isError });

  if (isLoading)
    return (
      <ReactLoading type="spinningBubbles" color="#A62626" height={40} width={40} />
    );

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
