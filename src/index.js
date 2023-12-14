import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouteList } from "./routes/RouteList";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store/store";

// Material Tailwind
import { ThemeProvider } from "@material-tailwind/react";

// Skeleton
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f8fafc">
        <ThemeProvider>
          <Toaster />
          <RouteList />
        </ThemeProvider>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>,
);
