import React from "react";
import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "assets/styles/theme";
import Router from "./router";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
