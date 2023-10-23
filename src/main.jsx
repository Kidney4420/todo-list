import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider
      theme={{
        config: {
          initialColorMode: "dark",
        },
      }}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
