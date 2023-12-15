import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouteList } from "./routes/RouteList";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_SERVER_API_ENDPOINT_GOOGLE}>
        <ThemeProvider>
          <Toaster />
          <RouteList />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
);
