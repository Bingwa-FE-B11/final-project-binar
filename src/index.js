import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouteList } from "./routes/RouteList";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store/store";

// Google OAUTH
import { GoogleOAuthProvider } from "@react-oauth/google";

// Material Tailwind
import { ThemeProvider } from "@material-tailwind/react";

// Skeleton
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_SERVER_API_ENDPOINT_GOOGLE}
        >
          <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f1f5f9">
            <ThemeProvider>
              <Toaster />
              <RouteList />
            </ThemeProvider>
          </SkeletonTheme>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
