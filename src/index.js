import React from "react";
import ReactDOM from "react-dom/client";
// React before v18
// import ReactDOM from "react-dom";

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// React before v18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
