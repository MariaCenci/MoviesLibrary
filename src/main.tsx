
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  hydrate(
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>,
    rootElement
  );
} else {
  console.error("Element with ID 'root' not found.");
}

/*
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );*/