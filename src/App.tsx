// import { QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider } from "styled-components";
// import theme from "../src/assets/styles/theme";
import { QueryClient } from "@tanstack/react-query";
import Router from "./router";
import "./App.css";
import { Toaster } from "react-hot-toast";

// const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}> */}
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
      {/* </QueryClientProvider>
    </ThemeProvider> */}
    </div>
  );
};

export default App;
