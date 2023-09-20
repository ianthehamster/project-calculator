import CalculateProvider from "./provider/calculateProvider";
import CalcBody from "./page/calcBody/calcBody";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CalculateProvider>
        <h1>Rocket Academy Calculator App</h1>
        <CalcBody />
      </CalculateProvider>
    </div>
  );
}

export default App;
