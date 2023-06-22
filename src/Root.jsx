import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ApiProvider } from "./context/ApiContext";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <ApiProvider>
          <Outlet />
        </ApiProvider>
      </QueryClientProvider>
      <Footer />
    </>
  );
}
