import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import App from "./App";
import "./index.css";
import Debounce from "./pages/Debounce";
import ScrollThrottle from "./pages/ScrollThrottle";
import Background from "./components/Background";
import {Box} from "@mantine/core";
import Throttle from "./pages/Throttle";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Box p="lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="debounce" element={<Debounce />} />
          <Route path="throttle" element={<Throttle />} />
          <Route path="scroll-throttle" element={<ScrollThrottle />} />
        </Routes>
      </BrowserRouter>
      <Background />
    </Box>
  </QueryClientProvider>
);
