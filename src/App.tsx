import React, { Suspense } from "react";
import PageFallback from "./components/UI/PageFallback";
import queryClient from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import AlertProvider from "./components/UI/AlertProvider";

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <QueryClientProvider client={queryClient}>
        <AlertProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AlertProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
