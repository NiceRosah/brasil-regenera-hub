import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/brasil-regenera-hub">
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
