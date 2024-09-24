import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./Global.css";
import { AppContextProvider } from "./Context/AppContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ChakraProvider>
);
