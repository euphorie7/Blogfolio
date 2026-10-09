import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({});

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
  key: "BLOGFOLIO_CACHE",
});
console.log("hello");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
        maxAge: 24 * 60 * 60 * 1000,
      }}
    >
      <Analytics />
      <RouterProvider router={router} />
    </PersistQueryClientProvider>
  </StrictMode>,
);
