import "./App.css";
import { CreateAuthContext } from "./components/CreateAuthContext";
import Home from "./Home";

function App() {
  return (
    <CreateAuthContext>
      <div className="App">
        <Home/>
      </div>
    </CreateAuthContext>
  );
}

export default App;
