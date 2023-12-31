import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LoginPage from "./login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);