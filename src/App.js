import "./App.css";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langsContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Contenu />
        <ToggleLangs />
      </ContextProvider>
    </div>
  );
}

export default App;