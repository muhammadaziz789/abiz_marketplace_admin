import React, { Suspense } from "react";
import PageFallback from "./components/UI/PageFallback";
import queryClient from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
