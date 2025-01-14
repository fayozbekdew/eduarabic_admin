import "./index.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { Provider } from "react-redux";
import './i18n';
import Store from "./ReduxToolkit/Store";
import { unstable_batchedUpdates } from "react-dom";
import React from "react";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = ReactDOM.createRoot(rootElement as HTMLElement);

unstable_batchedUpdates(() => {
  console.error = () => { };
});

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  componentDidCatch(error: Error) {
    if (error.message.includes("ToastContainer")) {
      return;
    }
  }

  render() {
    return this.props.children;
  }
}

root.render(
  <Provider store={Store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
