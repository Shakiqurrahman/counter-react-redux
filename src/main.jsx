import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Layout from "./AllRoutes/layout";
import { router } from "./AllRoutes/Routes";
import "./index.css";
import store from "./App/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <Layout />
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);
