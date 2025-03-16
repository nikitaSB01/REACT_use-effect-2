import "./App.css";
import { DataComponent } from "./components/DataComponent";
import { ErrorComponent } from "./components/ErrorComponent";
import { LoadingComponent } from "./components/LoadingComponent";

function App() {
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Демонстрация useJsonFetch</h1>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
}

export default App;
