import { Header, Navigation, Movie } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Navigation />
        <Movie />
      </div>
    </div>
  );
}

export default App;
