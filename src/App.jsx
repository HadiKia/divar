import Router from "router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import defaultOptions from "configs/reactQuery";
import Layout from "layouts/Layout";
import ToasterComponent from "components/Toaster";
import QueryProvider from "context/QueryContext";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <QueryProvider>
          <Layout>
            <Router />
          </Layout>
        </QueryProvider>
        <ToasterComponent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
