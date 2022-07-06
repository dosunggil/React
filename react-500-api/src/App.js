import logo from "./logo.svg";
import "./App.css";
import "./w3css.css";
import ApiMain from "./comps/ApiMain";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ApiMain />
    </div>
  );
}

export default App;
