import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./firebase";
import ComingSoonPage from "./pages/ComingSoonPage";
import { faker } from "@faker-js/faker";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const images = Array.from(Array(120).keys())
//   .map((i) => faker.image.url({ height: 300, width: 300 }))
//   .reduce((obj, item, index) => {
//     const key = index.toString();
//     obj[key] = item;
//     return obj;
//   }, {} as any);
// console.log(images);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
