import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import "react-datepicker/dist/react-datepicker.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer autoClose={1500} />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
