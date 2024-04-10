import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import Index from "./routes/router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Index></Index>
      </Provider>
    </div>
  );
}

export default App;
