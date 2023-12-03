import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouteList } from "./routes/RouteList";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouteList />
    </Provider>
  </React.StrictMode>
);
