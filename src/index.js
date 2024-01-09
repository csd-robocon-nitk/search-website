import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax'

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </React.StrictMode>
);