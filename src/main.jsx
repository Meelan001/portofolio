import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
