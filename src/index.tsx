import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Hello from "./components/Hello";
// import reportWebVitals from "./reportWebVitals";

//勝手に追加
import Name from "./components/Name";
import Message from "./components/Message";
import ContainerSample from "./components/ContainerSample";
import Page from "./components/ContextSample";
import { Parent } from "./components/Parent";
import UseMemoSample from "./components/UseMemoSample";

ReactDOM.render(
  <React.StrictMode>
    <Hello />

    {/* 勝手に追加start */}
    <Name />
    <Message />
    <ContainerSample />
    <Page />
    <Parent />
    <UseMemoSample />
    {/* 勝手に追加end */}
  </React.StrictMode>,
  document.getElementById("root")
);

/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
