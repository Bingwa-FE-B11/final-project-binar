import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default: localStorage
import { thunk } from "redux-thunk";
import rootReducer from "../reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

const persistor = persistStore(store);

export { store, persistor };
