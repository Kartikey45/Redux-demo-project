import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import BookContainer from "./components/BookContainer";
import store from "./redux/store";
import HookBookContainer from './components/HookBookContainer';

function App() {
  return (
    <Provider  store={store}>
      <div className="App">
      <HookBookContainer/>
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
