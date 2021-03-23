import { Provider } from "react-redux";

import store from "./store";
import { Header, Content } from "./components";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="App-content">
          <Content />
        </div>
      </div>
    </Provider>
  );
}

export default App;
