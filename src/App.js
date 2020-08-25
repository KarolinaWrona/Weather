import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./navigation/Routes";
import "./utils/GlobalStyles.css";
import configureStore, { history } from "./base/redux/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <h1 id="name">Gigi Weather</h1>
        <div className="App d-flex justify-content-center align-items-center">
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
