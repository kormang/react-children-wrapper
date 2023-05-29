import React from "react";

import App from "./App.tsx";
import { store } from "./app/store";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChildrenWrapper from "react-children-wrapper";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChildrenWrapper>
      <ChakraProvider />
      <Provider store={store}>.</Provider>
      <App />
    </ChildrenWrapper>
  </React.StrictMode>
);
