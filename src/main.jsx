import "./assets/global.css";

import App from "./App.jsx";
import PaletteProvider from "./context/PaletteContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </React.StrictMode>
);
