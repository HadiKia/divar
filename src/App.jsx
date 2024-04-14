import Router from "router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import defaultOptions from "configs/reactQuery";
import Layout from "layouts/Layout";
import ToasterComponent from "components/Toaster";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
        <ToasterComponent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
