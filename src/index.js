import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importing CSS styles
import App from "./App"; // Importing the main application component
import * as serviceWorker from "./serviceWorker"; // Importing service worker for offline capabilities

ReactDOM.render(<App />, document.getElementById("root")); // Rendering the main application component into the root element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // Unregistering the service worker
