import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import App from "./App.tsx";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider>
  </StrictMode>
);
